import {
  forwardRef,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import clsx from 'clsx';

interface FormFieldProps {
  label?: string;
  error?: string;
  helper?: string;
  required?: boolean;
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FormFieldProps {}
interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    FormFieldProps {}
interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    FormFieldProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helper, required, ...props }, ref) => (
    <div className="form-group">
      {label && (
        <label htmlFor={props.id} className="form-label">
          {label} {required && <span className="text-light-error">*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          'form-input',
          { 'form-input--error': error },
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${props.id}-error`
            : helper
              ? `${props.id}-helper`
              : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="form-error">
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${props.id}-helper`} className="form-helper">
          {helper}
        </p>
      )}
    </div>
  ),
);

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helper, required, children, ...props }, ref) => (
    <div className="form-group">
      {label && (
        <label htmlFor={props.id} className="form-label">
          {label} {required && <span className="text-light-error">*</span>}
        </label>
      )}
      <select
        ref={ref}
        className={clsx(
          'form-select',
          { 'form-input--error': error },
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${props.id}-error`
            : helper
              ? `${props.id}-helper`
              : undefined
        }
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${props.id}-error`} className="form-error">
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${props.id}-helper`} className="form-helper">
          {helper}
        </p>
      )}
    </div>
  ),
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, helper, required, ...props }, ref) => (
    <div className="form-group">
      {label && (
        <label htmlFor={props.id} className="form-label">
          {label} {required && <span className="text-light-error">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        className={clsx(
          'form-input',
          { 'form-input--error': error },
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${props.id}-error`
            : helper
              ? `${props.id}-helper`
              : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="form-error">
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${props.id}-helper`} className="form-helper">
          {helper}
        </p>
      )}
    </div>
  ),
);

Input.displayName = 'Input';
Select.displayName = 'Select';
TextArea.displayName = 'TextArea';
