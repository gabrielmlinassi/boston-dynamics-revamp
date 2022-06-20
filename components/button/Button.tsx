import React from "react";
import cn from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";

import styles from "./Button.module.css";
import Spinner from "@components/spinner";

type ButtonProps = {
  variant: "filled" | "subtle" | "outlined";
  asChild?: boolean;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  size?: "xs" | "sm" | "md";
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (props, forwardedRef) => {
    const {
      asChild = false,
      children,
      variant,
      startIcon: _startIcon,
      endIcon: _endIcon,
      loading = false,
      size = "sm",
      className,
      ...rest
    } = props;

    const startIcon = React.isValidElement(_startIcon)
      ? React.cloneElement(_startIcon, {
          className: cn(_startIcon.props.className, styles.icon),
        })
      : _startIcon;

    const endIcon = React.isValidElement(_endIcon)
      ? React.cloneElement(_endIcon, {
          className: cn(_endIcon.props.className, styles.icon),
        })
      : _endIcon;

    const classes = cn(styles.base, styles[variant], styles[size], className);

    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={classes} ref={forwardedRef} {...rest}>
        {startIcon && loading ? <Spinner /> : startIcon}
        <Slottable>{children}</Slottable>
        {endIcon && loading ? <Spinner /> : endIcon}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export default Button;
