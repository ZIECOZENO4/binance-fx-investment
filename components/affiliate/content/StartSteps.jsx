
import styles from '../../../app/constants/styles'

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
  <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] mb-2`}>
  <p className=' font-bold text-[20px] text-secondary-white mb-2'>0{number}</p>
  </div>
<p className=' flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] md:leading-[32px] leading-[20px] mb-2 md:text-[22px]  ' >{text}
</p>
  </div>
);

export default StartSteps;
