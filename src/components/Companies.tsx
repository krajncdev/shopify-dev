import { companies } from '../config/constants';
import Image from './Image';

const Companies = () => {
  return (
    <section className='px-6 xl:px-0 py-6'>
      <div className=' border-b border-t border-dashed border-bright_green '>
        <div className='flex flex-wrap gap-5 xl:justify-between sm:gap-12 justify-center items-center mt-4 mb-2 pb-6 xl:pt-6 xl:px-6'>
          {companies.map((company) => (
            <Image
              imgSrc={company.icon}
              largeImgSrc={company.icon}
              imgBreakPoint={1024}
              alt={company.alt}
              key={company.id}
              customStyle='w-14 sm:w-24 xl:w-28 mb-4'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
