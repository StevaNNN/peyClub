"use client";

import {
  FC,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useCallback,
  useState,
} from "react";
import clsx from "clsx";
import Text from "./Text";

type InputVariant = "text" | "email" | "tel" | "textarea";

type BaseProps = {
  label: string;
  type?: InputVariant;
  error?: string;
  onChange?: (value: string) => void;
};

export type InputProps = BaseProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement> &
      TextareaHTMLAttributes<HTMLTextAreaElement>,
    "type" | "onChange"
  >;

const Input: FC<InputProps> = ({
  label,
  type = "text",
  error,
  className,
  onChange,
  id,
  rows,
  ...rest
}) => {
  // const generatedId = useId();
  const inputId = id;
  const errorId = `${inputId}-error`;
  const [touched, setTouched] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  const handleBlur = useCallback(() => {
    setTouched(true);
  }, []);

  const showError = touched && !!error;

  const sharedProps = {
    id: inputId,
    className: "p-input__field",
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": showError || undefined,
    "aria-describedby": showError ? errorId : undefined,
  };

  return (
    <div className={clsx("p-input", showError && "p-input--error", className)}>
      <Text htmlElement={"label"} className="p-input__label" htmlFor={inputId}>
        {label}
      </Text>
      {type === "textarea" ? (
        <textarea rows={rows ?? 4} {...sharedProps} {...rest} />
      ) : (
        <input type={type} {...sharedProps} {...rest} />
      )}
      {showError ? (
        <Text
          fontSize="xxs"
          id={errorId}
          className="p-input__error"
          role="alert"
        >
          {error}
        </Text>
      ) : (
        <Text className="p-input__error" />
      )}
    </div>
  );
};

export default Input;
