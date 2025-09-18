import React from "react";
import clsx from "clsx";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar: React.FC<AvatarProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-full bg-gray-200 overflow-hidden",
        className
      )}
      {...props}
    />
  );
};

export const AvatarImage: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = ({ className, ...props }) => (
  <img
    className={clsx("object-cover w-full h-full", className)}
    {...props}
  />
);

export const AvatarFallback: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, children, ...props }) => (
  <div
    className={clsx("flex items-center justify-center w-full h-full", className)}
    {...props}
  >
    {children}
  </div>
);

export default Avatar;
