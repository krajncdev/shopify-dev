import { textContent } from '../config/constants';
import { Heading, Image } from '../components';

const CommerceExperienceSection = () => {
  return (
    <div className='relative xl:mt-20 xl:mb-16 bg-background_gray xl:rounded-2xl xl:w-[94rem] xl:flex xl:justify-center'>
      <Image
        imgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/hero/hero-2-2x-e13e1c89ee3d48d230972cb4ab97012a8493223cd5260445513f1db76f654c57.png'
        largeImgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/hero/hero-2-2x-e13e1c89ee3d48d230972cb4ab97012a8493223cd5260445513f1db76f654c57.png'
        imgBreakPoint={1024}
        alt='shopify.dev-hero-image'
        customStyle='h-60 sm:h-96 xl:hidden'
      />

      <section className='px-4 sm:px-14  py-10 xl:h-[40rem] xl:flex xl:flex-col xl:justify-center max-w-[85rem]'>
        <button className='xl:w-fit flex items-center gap-4 bg-black hover:text-black text-white px-3.5 py-3 rounded-[2rem] mb-10 hover:bg-bright_green transition ease-in duration-200 group'>
          <div className='sm:flex gap-1 '>
            <p className='font-bold'>Shopify Editions</p>
            <p className='hidden sm:block'>|</p>
            <p className='sm:font-bold'>Winter '23 is live</p>
            <p className='hidden md:block'>:</p>
            <p className='text-bright_green hidden md:block group-hover:text-black transition ease-in duration-200 '>
              Explore 100+ product updates
            </p>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current text-bright_green group-hover:text-black transition ease-in duration-200'
              style={{ transform: 'msFilter' }}
            >
              <path d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z'></path>
              <path d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z'></path>
            </svg>
          </div>
        </button>

        <Heading heading={textContent[0].heading} customStyles='xl:w-2/5' />
        <p className='mt-10 text-lg text-paragraph xl:w-2/5'>
          {textContent[0].paragraphs}
        </p>

        <button className='flex items-center mt-10 gap-1 group w-fit'>
          <span className='text-darker_green font-bold text-lg'>
            Explore docs
          </span>
          <div className='group-hover:translate-x-2 transition ease-in-out duration-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{
                fill: '#308023',
                transform: 'scaleX(-1)',
                msFilter:
                  'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)',
              }}
            >
              <path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z'></path>
            </svg>
          </div>
        </button>
      </section>

      <Image
        imgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/hero/hero-3-2x-e91643e0a6b006365392995978c5a33a1799ef6410f914ecc08e6a8f0177d70c.png'
        largeImgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/hero/hero-1-473607895c3e08a78bced6946c3aeebd98dc4a92cb45b0ce84c4cf538a394b59.png'
        imgBreakPoint={1280}
        alt='shopify.dev-hero-image'
        customStyle='h-60 sm:h-[30rem] xl:h-[45rem]  xl:absolute xl:right-[7rem] xl:-bottom-12'
      />
    </div>
  );
};

export default CommerceExperienceSection;
