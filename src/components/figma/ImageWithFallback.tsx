import React, { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback({ fallbackSrc = "/background-image.png", onError, ...props }: Props) {
  const [src, setSrc] = useState(props.src);
  return (
    <img
      {...props}
      src={src}
      onError={(e) => {
        setSrc(fallbackSrc);
        if (onError) onError(e as any);
      }}
    />
  );
}


