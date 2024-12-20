import { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  isInteractive?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isBordered?: boolean;
  isCompact?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      subtitle,
      footer,
      children,
      isInteractive = false,
      isSelected = false,
      isDisabled = false,
      isBordered = false,
      isCompact = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'card',
          {
            'card-interactive': isInteractive,
            'card-selected': isSelected,
            'card-disabled': isDisabled,
            'card-bordered': isBordered,
            'card-compact': isCompact,
          },
          className,
        )}
        {...props}
      >
        {(title || subtitle) && (
          <div className="card-header">
            <div>
              {title &&
                (typeof title === 'string' ? (
                  <h3 className="card-title">{title}</h3>
                ) : (
                  title
                ))}
              {subtitle &&
                (typeof subtitle === 'string' ? (
                  <p className="card-subtitle">{subtitle}</p>
                ) : (
                  subtitle
                ))}
            </div>
          </div>
        )}

        <div className="card-content">{children}</div>

        {footer && <div className="card-footer">{footer}</div>}
      </div>
    );
  },
);

Card.displayName = 'Card';
