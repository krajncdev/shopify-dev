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
      {imgBreakPoint === 1024 && (
        <>
          <img
            src={imgSrc}
            alt={alt}
            className='h-full w-full object-cover image-pixelated lg:hidden'
          />
          <img
            src={largeImgSrc}
            alt={alt}
            className='h-full w-full object-cover image-pixelated hidden lg:block'
          />
        </>
      )}
      {imgBreakPoint === 1280 && (
        <>
          <img
            src={imgSrc}
            alt={alt}
            className='h-full w-full object-cover image-pixelated xl:hidden'
          />
          <img
            src={largeImgSrc}
            alt={alt}
            className='h-full w-full object-cover image-pixelated hidden xl:block'
          />
        </>
      )}
    </div>
  );
};

export default Image;
