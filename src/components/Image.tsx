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
        srcSet={`${imgSrc} ${
          imgBreakPoint - 1
        }w, ${largeImgSrc} ${imgBreakPoint}w`}
        sizes={`(max-width: ${imgBreakPoint - 1}px) ${
          imgBreakPoint - 1
        }px, ${imgBreakPoint}px`}
        alt={alt}
        className='h-full w-full object-cover image-pixelated'
      />
    </div>
  );
};

export default Image;
