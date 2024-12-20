import { forwardRef, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'surface' | 'muted';
  isInteractive?: boolean;
  isDisabled?: boolean;
}

export const Icon = ({
  icon: Icon,
  size = 'md',
  variant = 'surface',
  isInteractive = false,
  isDisabled = false,
  className,
  ...props
}: IconProps & Omit<React.ComponentProps<LucideIcon>, keyof IconProps>) => {
  return (
    <Icon
      className={clsx(
        'icon',
        {
          'icon-xs': size === 'xs',
          'icon-sm': size === 'sm',
          'icon-md': size === 'md',
          'icon-lg': size === 'lg',
          'icon-xl': size === 'xl',
          'icon-primary': variant === 'primary',
          'icon-secondary': variant === 'secondary',
          'icon-surface': variant === 'surface',
          'icon-muted': variant === 'muted',
          'icon-interactive': isInteractive,
          'icon-disabled': isDisabled,
        },
        className,
      )}
      {...props}
    />
  );
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  variant?: 'primary' | 'secondary' | 'surface' | 'muted';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, label, variant = 'surface', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx('icon-button', className)}
        aria-label={label}
        {...props}
      >
        <Icon
          className={clsx('icon icon-sm', {
            'icon-primary': variant === 'primary',
            'icon-secondary': variant === 'secondary',
            'icon-surface': variant === 'surface',
            'icon-muted': variant === 'muted',
          })}
        />
      </button>
    );
  },
);
