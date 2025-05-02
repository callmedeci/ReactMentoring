import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router';
import { type LinkProps } from 'react-router-dom';

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonLinkProps = LinkProps & BaseProps & { to: string };

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  BaseProps & {
    to?: never;
  };

function isLinkProps(
  props: ButtonLinkProps | ButtonProps
): props is ButtonLinkProps {
  return 'to' in props;
}

function Button(props: ButtonProps | ButtonLinkProps) {
  if (isLinkProps(props)) {
    const { children, textOnly, ...otherProps } = props;

    return (
      <Link
        className={`${textOnly ? 'button--text-only' : ''} button`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`${textOnly ? 'button--text-only' : ''} button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
