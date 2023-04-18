import { useSnapshot } from 'valtio';
import { NavbarElementI } from '../config/constants';
import { state } from '../store';
import { useEffect, useRef } from 'react';

interface NavbarContentElementI {
  data: NavbarElementI;
}

const NavbarContentElement = ({ data }: NavbarContentElementI) => {
  const snap = useSnapshot(state);
  const ulRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ulRef.current &&
        !ulRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        state.activeNavbarElement = '';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    data.elements?.length !== 0 && state.activeNavbarElement === data.name
      ? (state.activeNavbarElement = '')
      : (state.activeNavbarElement = data.name);
  };

  return (
    <div className='relative'>
      <button
        className='flex gap-0.5 text-paragraph items-center'
        onClick={handleButtonClick}
        ref={buttonRef}
      >
        <div
          className={`${
            snap.activeNavbarElement === data.name &&
            'font-semibold hover:text-black'
          }`}
        >
          {data.name}
        </div>
        {data.elements && (
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
        )}
      </button>

      {snap.activeNavbarElement === data.name && (
        <ul
          className='absolute rounded-xl z-50 bg-white shadow-lg w-fit flex py-2 flex-col'
          ref={ulRef}
        >
          {data.elements?.map((el) => (
            <li
              className='w-full whitespace-nowrap text-paragraph hover:bg-background_gray rounded-lg py-1.5 px-4'
              key={el.id}
            >
              <button className='w-full text-left h-full'>{el.content}</button>
            </li>
          ))}
          {data.name === 'Documentation' && (
            <>
              <li>
                <div className='h-px w-full bg-paragraph mt-2'></div>
              </li>
              <li className='w-full whitespace-nowrap text-paragraph hover:bg-background_gray rounded-lg py-1.5 px-4'>
                <button className='w-full text-left h-full'>View all</button>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default NavbarContentElement;
