import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Info, AlertTriangleIcon, XIcon } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        informative:
          "border-blue-500/30 bg-blue-500/10 text-blue-800 dark:border-blue-500/60 [&>svg]:text-blue-800",
        warning:
          "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:border-amber-500/60 [&>svg]:text-amber-800",
        critical:
          "border-red-500/30 bg-red-500/10 text-red-800 dark:border-red-500/60 [&>svg]:text-red-800",
      },
    },
    defaultVariants: {
      variant: "informative",
    },
  }
);

const Icons = {
  informative: Info,
  warning: AlertTriangleIcon,
  critical: XIcon,
};

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertVariants> & { hasIcon?: boolean }
>(
  (
    { className, variant = "informative", hasIcon = true, children, ...props },
    ref
  ) => {
    const Icon = Icons[variant ?? "informative"];
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {hasIcon && variant && <Icon className="w-4 h-4" />}
        {children}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
