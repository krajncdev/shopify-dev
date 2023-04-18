interface HeadingPropsI {
  heading: string;
  customStyles?: string;
}

const Heading = ({ heading, customStyles }: HeadingPropsI) => {
  return (
    <>
      <h2
        className={`${customStyles} text-3xl lg:text-5xl lg:w-3/5 font-bold mb-6 text-heading lg:leading-[1.3]`}
      >
        {heading}
      </h2>
      <div className='w-72 h-1 bg-dark_green'></div>
    </>
  );
};

export default Heading;
