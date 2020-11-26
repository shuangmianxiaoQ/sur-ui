import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
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
  btnType?: ButtonType;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = ({
  className,
  btnType = ButtonType.Default,
  size,
  href,
  disabled = false,
  children,
  ...restProps
}) => {
  const btnClass = cx('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={btnClass} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
