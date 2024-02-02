import Image from 'next/image';
import styles from '../../../app/constants/styles';
const NewFeatures = ({ imgUrl, title, subtitle}) => (
  <div className=" flex-1 flex flex-col sm:max-w-[250px] min-h-[210px] md:min-h-[350px] md:min-w-[200px] mt-[5px] md:mt-[15px]">
  <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] `}>
  <Image
  src={imgUrl}
  alt="updates"
  className="w-2/3  h-1/2 object-contain"
  height={10}
  width={10}
  />
  </div>  
  <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white pr-3">TITLE:   {title}</h1>
  <p className="  flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px] pr-3 ">{subtitle}</p>
  </div>
);

export default NewFeatures;
