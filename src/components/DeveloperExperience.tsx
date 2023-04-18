import { textContent } from '../config/constants';
import { Heading, Image } from '../components';

const DeveloperExperience = () => {
  return (
    <div className='xl:w-[94rem] bg-background_gray xl:py-10 xl:mt-20 xl:flex xl:justify-center xl:rounded-2xl'>
      <section className='px-4 sm:px-14 pt-20 sm:pt-30 sm:pb-24 pb-10 relative max-w-[85rem]'>
        <Heading heading={textContent[2].heading} />

        <div className='mt-12 lg:w-[45%]'>
          {textContent[2].paragraphs?.map((par, i) => (
            <p className='mt-4 text-paragraph text-lg' key={i}>
              {par}
            </p>
          ))}
        </div>

        <Image
          imgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/developer-experience/home-developer-experience-large-94000b4efcae82afc7acc9219249bc34d3ee1dbef81636b770d037ae692726da.png'
          largeImgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/developer-experience/home-developer-experience-large-94000b4efcae82afc7acc9219249bc34d3ee1dbef81636b770d037ae692726da.png'
          imgBreakPoint={1024}
          alt='laptop-image'
          customStyle='w-[80%] mt-14 mx-auto lg:w-[45%] lg:absolute lg:right-12 lg:bottom-10'
        />
      </section>
    </div>
  );
};

export default DeveloperExperience;
