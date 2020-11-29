import { Children, cloneElement, createContext, CSSProperties, FC, FunctionComponentElement, useState } from 'react';
import cx from 'classnames';
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

interface IMenuContext {
  index: string;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
  onSelect?: SelectCallback;
}

export interface MenuProps {
  mode?: MenuMode;
  defaultIndex?: string;
  defaultOpenSubMenus?: string[];
  className?: string;
  style?: CSSProperties;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: FC<MenuProps> = ({
  mode = 'horizontal',
  defaultIndex = '0',
  defaultOpenSubMenus = [],
  className,
  style,
  onSelect,
  children,
}) => {
  const [currentActive, setActive] = useState(defaultIndex);
  const menuClass = cx('menu', className, {
    'menu-horizontal': mode === 'horizontal',
    'menu-vertical': mode === 'vertical',
  });

  const handleSelect = (index: string) => {
    setActive(index);
    onSelect?.(index);
  };

  const passedContext: IMenuContext = {
    index: currentActive,
    mode,
    defaultOpenSubMenus,
    onSelect: handleSelect,
  };

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return cloneElement(childElement, { index: String(index) });
      } else {
        console.error('Warning: Menu has a child witch is a MenuItem or SubMenu component');
      }
    });
  };

  return (
    <ul className={menuClass} style={style}>
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

export default Menu;
