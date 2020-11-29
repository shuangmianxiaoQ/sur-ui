import {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  FunctionComponentElement,
  MouseEvent,
  useContext,
  useState,
} from 'react';
import cx from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
}

const SubMenu: FC<SubMenuProps> = ({ index, title, className, style, children }) => {
  const context = useContext(MenuContext);
  const isOpened = index ? context.defaultOpenSubMenus?.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = cx('menu-item', 'submenu-item', className, {
    active: context.index === index,
  });
  let timer: any;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => setOpen(toggle), 300);
  };

  const renderChildren = () => {
    const subMenuClass = cx('submenu', {
      'menu-opened': menuOpen,
    });

    return (
      <ul className={subMenuClass}>
        {Children.map(children, (child, i) => {
          const childElement = child as FunctionComponentElement<MenuItemProps>;
          if (childElement.type.displayName === 'MenuItem') {
            return cloneElement(childElement, { index: `${index}-${i}` });
          } else {
            console.error('Warning: SubMenu has a child whitch is a MenuItem component');
          }
        })}
      </ul>
    );
  };

  return (
    <li
      className={classes}
      style={style}
      onMouseEnter={context.mode === 'horizontal' ? (e) => handleMouse(e, true) : undefined}
      onMouseLeave={context.mode === 'horizontal' ? (e) => handleMouse(e, false) : undefined}
    >
      <div className="submenu-title" onClick={context.mode === 'vertical' ? handleClick : undefined}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
