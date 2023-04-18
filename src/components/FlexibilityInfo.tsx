import { FlexibilityInfoI } from '../config/constants';

interface FlexibilityInfoPropsI {
  info: FlexibilityInfoI;
}

const FlexibilityInfo = ({ info }: FlexibilityInfoPropsI) => {
  const { id, heading, paragraph, icon } = info;
  return (
    <div className=' bg-background_gray rounded-xl px-6 py-10'>
      <img src={icon} alt={`${heading}-icon`} />
      <h3 className='text-lg font-semibold pt-8 pb-3'>{heading}</h3>
      <p className='text-sm text-paragraph'>{paragraph}</p>
    </div>
  );
};

export default FlexibilityInfo;
