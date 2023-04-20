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
        alt={alt}
        className={`h-full w-full object-cover image-pixelated ${
          imgBreakPoint === 1024 ? 'lg:hidden' : 'xl:hidden'
        }`}
      />
      <img
        src={largeImgSrc}
        alt={alt}
        className={`h-full w-full object-cover image-pixelated hidden ${
          imgBreakPoint === 1024 ? 'lg:block' : 'xl:block'
        }`}
      />
    </div>
  );
};

export default Image;
