import { PerkI } from '../config/constants';

interface PerkPropsI {
  perk: PerkI;
}

const Perk = ({ perk }: PerkPropsI) => {
  const { id, content } = perk;
  return (
    <li
      className={`flex gap-6 py-4 border-b border-dashed border-bright_green ${
        id === 1 && 'border-t'
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        style={{ fill: '#308023', transform: 'msFilter' }}
      >
        <path d='m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z'></path>
      </svg>

      <p className='flex-1 text-darker_green text-lg'>{content}</p>
    </li>
  );
};

export default Perk;
