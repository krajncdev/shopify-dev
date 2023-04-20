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
  let mode;
  switch (imgBreakPoint) {
    case 1024:
      mode = 'lg';
      break;
    case 1280:
      mode = 'xl';
      break;
  }

  return (
    <div className={`${customStyle}`}>
      <img
        src={imgSrc}
        alt={alt}
        className={`h-full w-full object-cover image-pixelated ${mode}:hidden`}
      />
      <img
        src={largeImgSrc}
        alt={alt}
        className={`h-full w-full object-cover image-pixelated ${mode}:block hidden`}
      />
    </div>
  );
};

export default Image;
