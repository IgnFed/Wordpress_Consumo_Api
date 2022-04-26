import NextImage from 'next/image';

interface ImageProps {
  src: string,
  alt: string,
}

export default function Image<Props extends ImageProps>(
  {
    src,
    alt
  }: Props
){
  return (
    <NextImage 
      src={src || "/public/images/default_image.png"}
      alt={alt}
      loading='lazy'
      decoding='async'
      layout='responsive'
      width={"100%"}
      height={"100%"}
    />
  )
} 