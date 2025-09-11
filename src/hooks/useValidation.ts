import { useState, useEffect } from "react";

type ValidatorFn = (value: string) => string | null;

export const useValidation = (
  value: string,
  validator: ValidatorFn,
  delay = 500
) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      const validationError = validator(value);
      setError(validationError);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, validator, delay]);

  return error;
};