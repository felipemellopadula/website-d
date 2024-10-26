import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./styles.module.scss";

export interface InputProps {
  label: string;
  type?: string;
  error?: FieldError;
  className?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  // Outras propriedades que você usa no componente
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, type, error, className, name, placeholder, required, ...rest },
    ref
  ) => {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <input
          type={type}
          name={name}
          {...rest}
          ref={ref}
          className={`${styles.input} ${
            error ? styles.inputError : ""
          } ${className}`}
          placeholder={placeholder}
          required={required}
        />
        {error ? <p className={styles.errorMessage}>{error.message}</p> : null}
      </div>
    );
  }
);
