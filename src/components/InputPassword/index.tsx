import { forwardRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input, InputProps } from "../Input";
import styles from "./styles.module.scss";
import { FieldError } from "react-hook-form";

interface InputPasswordProps extends Omit<InputProps, "type"> {
  label: string;
  error?: FieldError;
  placeholder: string;
  className?: string;
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, error, placeholder, className, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);
    const type = isHidden ? "password" : "text";

    return (
      <div className={styles.inputPasswordContainer}>
        <Input
          label={label}
          type={type}
          error={error}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          className={className}
        />
        <button
          onClick={() => setIsHidden(!isHidden)}
          type="button"
          className={styles.toggleButton}
        >
          {isHidden ? <FaRegEye size={17} /> : <FaRegEyeSlash size={17} />}
        </button>
      </div>
    );
  }
);
