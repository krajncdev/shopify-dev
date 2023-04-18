import { FlexibilityInfo, Heading } from './';
import { textContent } from '../config/constants';
import { flexibilityInfos } from '../config/constants';

const Flexibility = () => {
  return (
    <section className='px-4 sm:px-14 pt-4 sm:mt-14 lg:mt-24 max-w-[85rem]'>
      <div className='pt-16 bg-floor-tiles mb-14'>
        <Heading heading={textContent[3].heading} />
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {flexibilityInfos.map((info) => (
          <FlexibilityInfo info={info} key={info.id} />
        ))}
      </div>
    </section>
  );
};

export default Flexibility;
