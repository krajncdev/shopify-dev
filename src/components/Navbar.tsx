import { useSnapshot } from 'valtio';
import { navbarContent } from '../config/constants';
import { NavbarContentElement } from './';
import { state } from '../store';

const Navbar = () => {
  const handleThemeButtonClick = () => {
    snap.theme === 'white' ? (state.theme = 'dark') : (state.theme = 'white');
  };

  const handleHamburgerClick = () => {
    state.isHamburgerActive = true;
  };

  const snap = useSnapshot(state);
  return (
    <nav className='px-4 py-2 lg:pr-10 flex items-center gap-6 sticky top-0 bg-white z-40 h-14'>
      <button className='lg:hidden' onClick={handleHamburgerClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='36'
          height='36'
          viewBox='0 0 24 24'
          style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
        >
          <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
        </svg>
      </button>

      <button>
        <img
          src='https://cdn.shopify.com/shopifycloud/shopify_dev/assets/shopify-dev-logo-light-100da87d8ee35fb04600643ee9092181cdfb0f4b6db9a4b102b491788560c938.svg'
          alt='shopify.dev-icon'
        />
      </button>

      <div className='gap-8 hidden lg:flex ml-16'>
        {navbarContent.map((el) => (
          <NavbarContentElement data={el} key={el.id} />
        ))}
      </div>

      <div className='ml-auto flex gap-4 items-center'>
        <button className='xl:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='h-5'
            style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
          >
            <path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path>
          </svg>
        </button>

        <button className='hidden xl:flex items-center gap-2 border-t-2 border-b border-l border-r border-border_gray rounded-lg bg-background_darker_gray px-1 py-0.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='h-5'
            style={{ fill: 'rgb(92 95 98)', transform: 'msFilter' }}
          >
            <path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path>
          </svg>

          <input
            type='text'
            placeholder='Search docs'
            className='w-28 text-paragraph placeholder:text-paragraph cursor-pointer outline-none'
          />
          <div className='text-paragraph font-bold bg-background_gray rounded-md leading-none h-5 w-5 text-sm border border-paragraph'>
            /
          </div>
        </button>

        <ul className=' gap-4 hidden lg:flex items-center'>
          <li className='flex items-center'>
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
          </li>

          <li className='text-paragraph text-sm'>
            <button>Log in</button>
          </li>
          <li className='text-darker_green font-bold text-sm'>
            <button>Sign up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
