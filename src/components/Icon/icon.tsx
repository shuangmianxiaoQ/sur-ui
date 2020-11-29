import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FC } from 'react';

export type Theme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: Theme;
}

const Icon: FC<IconProps> = ({ theme, className, ...restProps }) => {
  const iconClass = cx('icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={iconClass} {...restProps} />;
};

export default Icon;
