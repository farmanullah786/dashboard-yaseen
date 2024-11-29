import { Input } from "../ui/input";
import { useState, useEffect, InputHTMLAttributes, useRef } from "react";

interface DataTableToolbarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
}

export function DataTableToolbar({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: DataTableToolbarProps) {
  const [value, setValue] = useState(initialValue);

  const previousValue = useRef(initialValue);

  useEffect(() => {
    if (value !== previousValue.current) {
      const timeout = setTimeout(() => {
        onChange(value);
        previousValue.current = value;
      }, debounce);

      return () => clearTimeout(timeout);
    }
  }, [value]);

  return (
    <Input
      name="search"
      id="search"
      autoComplete="off"
      className="max-w-96 disabled:cursor-wait"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
}
