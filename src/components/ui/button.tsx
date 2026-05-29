import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "group inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-full border border-transparent font-medium tracking-[0.01em] no-underline transition-all duration-[180ms] ease-out",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper hover:bg-gold-deep",
        ghost: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
        gold: "bg-gold text-ink hover:bg-paper",
      },
      size: {
        default: "h-12 px-[22px] text-sm",
        sm: "h-10 px-[18px] text-[13px]",
      },
      onDark: {
        true: "",
        false: "",
      },
    },
    // ghost flips its palette on dark sections (mockup: .btn-on-dark)
    compoundVariants: [
      {
        variant: "ghost",
        onDark: true,
        class:
          "border-[oklch(0.50_0.01_60)] text-[oklch(0.92_0.02_75)] hover:bg-[oklch(0.92_0.02_75)] hover:text-ink",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      onDark: false,
    },
  },
);

type ButtonBaseProps = VariantProps<typeof button> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant,
  size,
  onDark,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(button({ variant, size, onDark }), className);

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...(props as ButtonAsLink)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
