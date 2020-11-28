import { CSSProperties, FC, useContext } from 'react';
import cx from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: FC<MenuItemProps> = ({ className, style, index, disabled, children }) => {
  const context = useContext(MenuContext);
  const classes = cx('menu-item', className, {
    disabled,
    active: index === context.index,
  });

  const handleClick = () => {
    !disabled && context.onSelect?.(index);
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
