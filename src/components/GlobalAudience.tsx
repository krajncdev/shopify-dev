import React from 'react';
import { textContent, shopifyDeveloperResources } from '../config/constants';
import { GlobalAudienceInnerElement, Heading, Image } from './';

const GlobalAudience = () => {
  return (
    <>
      <div className='relative lg:h-[44rem] pt-10 lg:pt-40 px-4 sm:px-14 xl:w-[85rem]'>
        <section className='  relative'>
          <Heading heading={textContent[4].heading} />
          <div className='mt-12 lg:w-2/3 xl:w-1/2'>
            {textContent[4].paragraphs?.map((par, i) => (
              <p className='mt-4 text-paragraph text-lg' key={i}>
                {par}
              </p>
            ))}
          </div>
        </section>
        <Image
          imgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/global-audience/home-audience-tablet-light-04666dd8715d626f62a970c93560a398592e23f2e721c00d65bc4700468b76ed.png'
          largeImgSrc='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/global-audience/home-audience-light-67325b67f7b8d31cd66e258220100d6e4acee4e0d4a3c7c85f009133778ff33a.png'
          imgBreakPoint={1024}
          alt='shopify.dev-diversity'
          customStyle='h-[30rem] image-pixelated lg:absolute xl:h-[36rem] lg:bottom-4 lg:-z-10'
        />
      </div>

      <section className='px-4 sm:px-14 md:px-20 xl:px-4 flex justify-center md:mt-20 max-w-[85rem]'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-4'>
          {shopifyDeveloperResources.map((rsrc) => (
            <React.Fragment key={rsrc.id}>
              <div
                className={`border-2 rounded-lg px-4 py-2.5 ${
                  rsrc.id === 1
                    ? 'border-bright_green mt-10 sm:mt-4'
                    : 'border-bright_blue mt-4'
                }`}
              >
                {rsrc.icon && (
                  <img
                    src={rsrc.icon}
                    alt={`${rsrc.name}-icon`}
                    className=' image-pixelated h-20'
                  />
                )}
                <h3 className='text-lg font-bold w-1/2'>{rsrc.name}</h3>
              </div>

              {rsrc.content.map((el) => (
                <GlobalAudienceInnerElement data={el} key={el.id} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default GlobalAudience;
