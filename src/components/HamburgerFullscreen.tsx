import { useSnapshot } from 'valtio';
import { state } from '../store';
import { useEffect } from 'react';
import { navbarContent } from '../config/constants';

const HamburgerFullscreen = () => {
  const snap = useSnapshot(state);

  const handleCloseHamburger = () => {
    state.isHamburgerActive = false;
  };

  const handleThemeButtonClick = () => {
    snap.theme === 'white' ? (state.theme = 'dark') : (state.theme = 'white');
  };

  const handleHamburgerMenuButton = () => {
    state.isHamburgerMenuActive = !state.isHamburgerMenuActive;
  };

  useEffect(() => {
    // add overflow hidden to body when the component is active
    if (snap.isHamburgerActive) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      // remove overflow hidden from body when the component is unmounted
      document.body.classList.remove('overflow-hidden');
    };
  }, [snap.isHamburgerActive]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg- bg-background_gray z-50 transform transition-transform duration-300 ${
          snap.isHamburgerActive ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='h-14 flex items-center justify-between px-4 bg-white'>
          <button onClick={handleCloseHamburger}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              viewBox='0 0 24 24'
              style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
            >
              <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
            </svg>
          </button>
          <button>
            <img
              src='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/shopify-dev-logo-light-100da87d8ee35fb04600643ee9092181cdfb0f4b6db9a4b102b491788560c938.svg'
              alt='shopify.dev-icon'
            />
          </button>
        </div>

        <div className='border-t bg-white border-b border-border_gray p-4 w-full relative'>
          <div className='w-full bg-white z-10'>
            <div className='bg-background_gray px-4 py-1.5 rounded-md'>
              <button
                className='   flex justify-between  w-full items-center '
                onClick={handleHamburgerMenuButton}
              >
                <div className='text-heading font-bold'>Menu</div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='h-3'
                    style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
                  >
                    <path d='M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z'></path>
                  </svg>
                </div>
              </button>

              <div
                className={`${
                  snap.isHamburgerMenuActive ? 'h-96 mt-4' : 'h-0'
                }  transition-all ease-in-out duration-500 overflow-hidden flex flex-col text-paragraph gap-2.5`}
              >
                {navbarContent.map((content) => (
                  <div className='flex flex-col gap-1.5 ' key={content.id}>
                    <a className=' cursor-pointer hover:text-black transition ease-in duration-100'>
                      {content.name}
                    </a>
                    {content.elements?.map((el) => (
                      <a
                        className='text-sm pl-4 cursor-pointer hover:text-black transition ease-in duration-100'
                        key={el.id}
                      >
                        {el.content}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='h-full w-full  absolute flex flex-col gap-4 px-4 pt-4 left-0 top-[4.3rem] -z-10'>
            <p className='text-paragraph text-sm'>Log in</p>
            <p className='text-paragraph text-sm'>Sign up</p>
            <button onClick={handleThemeButtonClick}>
              {snap.theme === 'dark' && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='h-5'
                  style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
                >
                  <path d='M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z'></path>
                </svg>
              )}
              {snap.theme === 'white' && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='h-5'
                  style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
                >
                  <path d='M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z'></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerFullscreen;
