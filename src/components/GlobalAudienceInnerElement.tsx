import { ShopifyDeveloperResourceContentI } from '../config/constants';

interface GlobalAudienceInnerElementI {
  data: ShopifyDeveloperResourceContentI;
}

const GlobalAudienceInnerElement = ({ data }: GlobalAudienceInnerElementI) => {
  return (
    <button className='text-left border-t border-l border-r border-b-[3px] rounded-xl px-4 pt-2.5 pb-4  mt-4'>
      <img src={data.icon} alt={`${data.heading}-icon`} />
      <div className='flex items-center gap-2 pt-3 pb-2'>
        <p className='font-bold '>{data.heading}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          style={{
            fill: '#000',
            transform: 'scaleX(-1)',
            msFilter:
              'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)',
          }}
        >
          <path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z'></path>
        </svg>
      </div>
      <p className='text-paragraph'>{data.paragraph}</p>
    </button>
  );
};

export default GlobalAudienceInnerElement;
