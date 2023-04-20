interface ImagePropsI {
  imgSrc: string;
  largeImgSrc: string;
  imgBreakPoint: number;
  alt: string;
  customStyle?: string;
}

const Image = ({
  imgSrc,
  alt,
  customStyle,
  largeImgSrc,
  imgBreakPoint,
}: ImagePropsI) => {
  return (
    <div className={`${customStyle}`}>
      <img
        src={imgSrc}
        srcSet={`${largeImgSrc} ${imgBreakPoint}w`}
        sizes={`(min-width: ${imgBreakPoint}px) 100vw, ${imgBreakPoint}px`}
        alt={alt}
        className='h-full w-full object-cover image-pixelated'
      />
    </div>
  );
};

export default Image;
