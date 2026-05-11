import Image from "next/image";
import React from "react";

export default function ImageWrapper({ alt, src, width, height, style }) {
  return (
    <Image
      alt={alt}
      src={src}
      width={width ? width : undefined}
      height={height}
      className={`cursor-pointer  ${style ? style : ""}`}
    />
  );
}
