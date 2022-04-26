import dynamic from 'next/dynamic';
import { ImageProps as NextImageProps } from 'next/image';

const NextImage = dynamic(()=> import('next/image')) 

interface ImageProps {
  src: string,
  alt: string,
  width?: string,
  height?: string,
  priority?: boolean,
  layout?: NextImageProps["layout"]
}

export default function Image<Props extends ImageProps>(
  {
    src,
    alt,
    width,
    height,
    layout,
    priority
  }: Props
){
  return (
    <NextImage 
      src={src || "/public/images/default_image.png"}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      priority={priority || false}
      decoding='async'
      layout={layout || 'responsive'}
      width={width || "100%"}
      height={height || "100%"}
    />
  )
} 