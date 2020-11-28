import { Children, cloneElement, createContext, CSSProperties, FC, FunctionComponentElement, useState } from 'react';
import cx from 'classnames';
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export interface MenuProps {
  mode?: MenuMode;
  defaultIndex?: number;
  className?: string;
  style?: CSSProperties;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: FC<MenuProps> = ({ className, style, mode = 'horizontal', defaultIndex = 0, onSelect, children }) => {
  const [currentActive, setActive] = useState(defaultIndex);
  const menuClass = cx('menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  const handleSelect = (index: number) => {
    setActive(index);
    onSelect?.(index);
  };

  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleSelect,
  };

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return cloneElement(childElement, { index });
      } else {
        console.error('Warning: Menu has a children witch is a MenuItem component');
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
