import clsx from 'clsx';

interface SkeletonProps {
  className?: string;
  isShimmer?: boolean;
}

export const TextSkeleton = ({
  className,
  isShimmer = true,
}: SkeletonProps) => (
  <div className={clsx('skeleton-text', { shimmer: isShimmer }, className)} />
);

export const TitleSkeleton = ({
  className,
  isShimmer = true,
}: SkeletonProps) => (
  <div className={clsx('skeleton-title', { shimmer: isShimmer }, className)} />
);

export const AvatarSkeleton = ({
  className,
  isShimmer = true,
}: SkeletonProps) => (
  <div className={clsx('skeleton-avatar', { shimmer: isShimmer }, className)} />
);

export const ButtonSkeleton = ({
  className,
  isShimmer = true,
}: SkeletonProps) => (
  <div className={clsx('skeleton-button', { shimmer: isShimmer }, className)} />
);

export const ImageSkeleton = ({
  className,
  isShimmer = true,
}: SkeletonProps) => (
  <div className={clsx('skeleton-image', { shimmer: isShimmer }, className)} />
);

interface CardSkeletonProps extends SkeletonProps {
  lines?: number;
}

export const CardSkeleton = ({
  className,
  lines = 3,
  isShimmer = true,
}: CardSkeletonProps) => (
  <div className={clsx('card space-y-4 p-4', className)}>
    <TitleSkeleton isShimmer={isShimmer} />
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <TextSkeleton key={i} isShimmer={isShimmer} />
      ))}
    </div>
    <ButtonSkeleton isShimmer={isShimmer} />
  </div>
);
