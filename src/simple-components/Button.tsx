import clsx from "clsx";

type ButtonVariant = "primary" | "info" | "error" | "success";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Color variant of the button
   */
  variant?: ButtonVariant;
  /**
   * How large should the button be?
   */
  size?: "tiny" | "small" | "normal" | "large";
  /**
   * Should the button have a circle shape?
   */
  isCircle?: boolean;
  /**
   * Icon in front of the text label
   */
  icon?: unknown;
  /**
   * Loading indicator for the button
   */
  isLoading?: boolean;
  /**
   * Indicator for disabled state of the button
   */
  isDisabled?: boolean;
  /**
   * Additional className applied to the button
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant = "primary",
  size = "normal",
  isCircle,
  icon,
  isLoading,
  isDisabled,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        "btn border-none w-full",
        {
          "bg-white text-dark-900 hover:text-white dark:bg-dark-900 dark:text-white dark:hover:bg-white dark:hover:text-dark-900":
            variant === "primary",
          "btn-error": variant === "error",
          "btn-success": variant === "success",
          "btn-info": variant === "info",
          "text-white dark:text-dark-900": variant !== "primary",
          "btn-lg": size === "large",
          "btn-sm": size === "small",
          "btn-xs": size === "tiny",
          "btn-circle": isCircle,
        },
        className
      )}
    >
      {isLoading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <>
          {icon}
          {props.children}
        </>
      )}
    </button>
  );
};

export default Button;
