import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-ravo-coral text-white hover:bg-ravo-coral/90 rounded-design",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-design",
        outline: "border border-ravo-charcoal bg-transparent hover:bg-ravo-charcoal hover:text-white rounded-design",
        secondary: "bg-ravo-electric text-white hover:bg-ravo-electric/90 rounded-design",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-subtle",
        link: "text-ravo-electric underline-offset-4 hover:underline rounded-none shadow-none hover:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs rounded-subtle",
        lg: "h-11 px-8 text-base rounded-prominent",
        icon: "h-10 w-10 rounded-design",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }