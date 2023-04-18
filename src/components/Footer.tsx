import { footerContent, footerFinal } from '../config/constants';

const Footer = () => {
  return (
    <>
      <section className='mt-20  px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mx-auto items-start gap-4 max-w-[85rem]'>
        {footerContent.map((content) => (
          <ul key={content.id} className='flex flex-col gap-1'>
            <li className='text-sm font-bold mb-4'>{content.name}</li>
            {content.elements.map((el) => (
              <li
                key={el.id}
                className='text-paragraph hover:text-black transition ease-in duration-200 cursor-pointer'
              >
                {el.name}
              </li>
            ))}
          </ul>
        ))}

        <div className='md:col-span-2 col-span-full'>
          <p className='mt-10 sm:mt-0 text-paragraph'>
            Subscribe to receive updates from Shopify
          </p>
          <div className='md:flex md:gap-4 items-center'>
            <input
              type='text'
              className='outline-none border-r border-l border-b border-t-4 rounded-md w-full px-4 py-1 mt-6'
              placeholder='Enter email'
            />

            <button className='border-t border-l border-r border-b-4 rounded-md px-4 py-1 mt-4'>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <div className='bg-background_gray mt-28 px-12 py-8 xl:flex xl:justify-center'>
        <ul className='flex flex-wrap justify-center sm:justify-start items-center gap-x-6 text-paragraph font-semibold xl:w-[85rem] xl:px-4'>
          {footerFinal.map((el) => (
            <li key={el.id}>
              <button className='hover:text-black transition ease-in duration-200'>
                {el.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
