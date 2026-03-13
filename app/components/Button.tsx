import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export interface ButtonProps {
  href?: string;
  className?: string;
  size?: "sm" | "md";
  variant?: "outline" | "brand" | "dark";
  onClick?: () => void;
}

const Button: FC<ButtonProps & PropsWithChildren> = ({
  href = "",
  className = "",
  size = "md",
  variant = "brand",
  children,
  onClick,
}) => {
  const buttonCls = clsx(
    "d-i-flex",
    "align-items-center",
    "justify-content-center",
    "p-btn",
    `p-btn--${size}`,
    `p-btn--${variant}`,
    className,
  );

  return (
    <Link href={href} className={buttonCls} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
