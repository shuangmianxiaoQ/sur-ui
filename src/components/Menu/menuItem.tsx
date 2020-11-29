import { CSSProperties, FC, useContext } from 'react';
import cx from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: FC<MenuItemProps> = ({ index, disabled, className, style, children }) => {
  const context = useContext(MenuContext);
  const classes = cx('menu-item', className, {
    disabled,
    active: index === context.index,
  });

  const handleClick = () => {
    !disabled && typeof index === 'string' && context.onSelect?.(index);
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
