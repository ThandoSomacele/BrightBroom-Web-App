import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        {
          'container-default': size === 'default',
          'container-narrow': size === 'narrow',
          'container-wide': size === 'wide',
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  hasSpacing?: boolean;
}

export function Section({
  hasSpacing = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx({ 'section-spacing': hasSpacing }, className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Stack({
  size = 'md',
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={clsx(
        {
          'stack-sm': size === 'sm',
          'stack-md': size === 'md',
          'stack-lg': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
