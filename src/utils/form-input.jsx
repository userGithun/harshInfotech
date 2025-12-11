import React from "react";

export default function FormInput({
  label,
  type,
  id,
  placeholder,
  required = false,
  value,
  onChange,
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-primary mb-2"
      >
        {label}
        {required && <span className="text-primary-red ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-neutral-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors bg-white text-primary"
      />
    </div>
  );
}
