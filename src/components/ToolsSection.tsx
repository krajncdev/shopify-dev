import { Heading, Image, Perk } from '../components';
import { textContent, perks } from '../config/constants';

const ToolsSection = () => {
  return (
    <div className='relative xl:h-[54rem]'>
      <Image
        imgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/logo-soup/home-logo-soup-2x-f26f4929ef17f5d14dc653efe62730642c4043bde80ebf6ee40406f98e22c44f.png'
        imgBreakPoint={1024}
        largeImgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/logo-soup/home-logo-soup-2x-f26f4929ef17f5d14dc653efe62730642c4043bde80ebf6ee40406f98e22c44f.png'
        alt='shopify.dev-hero-image'
        customStyle='h-60 sm:h-96 xl:hidden'
      />
      <section className='px-4 sm:px-14 md:mt-16 md:mb-16 lg:mt-24 max-w-[85rem]'>
        <div className='pt-20 bg-floor-tiles'>
          <Heading heading={textContent[1].heading} customStyles='xl:w-2/3' />
        </div>
        <div className='lg:flex lg:gap-4 '>
          <div className='lg:w-1/2'>
            <div className=' text-paragraph text-lg mt-12'>
              Shopify’s platform provides APIs, SDKs, primitives, and tools for
              building{' '}
              <a className='text-darker_green underline hover:no-underline cursor-pointer'>
                storefronts
              </a>
              , custom cart and{' '}
              <a className='text-darker_green underline hover:no-underline cursor-pointer'>
                checkout
              </a>{' '}
              flows, and seamless{' '}
              <a className='text-darker_green underline hover:no-underline cursor-pointer'>
                integrations
              </a>{' '}
              with your systems.
            </div>
            <p className=' text-paragraph text-lg mt-4'>
              {textContent[1].paragraphs}
            </p>
          </div>

          <ul className='mt-10 lg:w-1/2'>
            {perks.map((perk) => (
              <Perk perk={perk} key={perk.id} />
            ))}
          </ul>
        </div>
      </section>
      <Image
        imgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/set-apis/home-apis-tablet-light-47c1e12de0c5be2ca490734ac8a6680540fab0b2f84ec09b079013492dbb6089.png'
        largeImgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/set-apis/home-apis-light-07d784ef54a054a3e1d0bfc52cb2c0f1a8f5ccdcf56aed21794c5ace388ea2ca.png'
        imgBreakPoint={1024}
        alt='shopify.dev-crane'
        customStyle='h-[30rem] image-pixelated lg:h-[32rem] lg:absolute xl:bottom-4 lg:bottom-12 lg:-z-10'
      />
    </div>
  );
};

export default ToolsSection;
