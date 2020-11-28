import { createContext, CSSProperties, FC, useState } from 'react';
import cx from 'classnames';

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

  return (
    <ul className={menuClass} style={style}>
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

export default Menu;
