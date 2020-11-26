import { FC, ReactNode } from 'react';
import cx from 'classnames';

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

interface BaseButtonProps {
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<BaseButtonProps> = ({
  className,
  type = ButtonType.Default,
  size,
  href,
  disabled = false,
  children,
}) => {
  const btnClass = cx('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === ButtonType.Link && disabled,
  });

  if (type === ButtonType.Link && href) {
    return (
      <a className={btnClass} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
