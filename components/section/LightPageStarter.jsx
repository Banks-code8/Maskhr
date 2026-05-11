import ImageWrapper from '../Wrappers/ImageWrapper';
import MainText from '../typography/MainText';
import { HeaderOne } from '../typography/HeaderOne';
import MainBadge from '../button/MainBadge';
import AnimationWrapper from '../Wrappers/AnimationWrapper';

export default function LightPageStarter({
  title,
  subtitle,
  icon,
  hasBadge,
  badgeText,
  badgeIcon,
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <AnimationWrapper stagger direction="y" distance={-100}>
        {hasBadge ? (
          <MainBadge
            text={badgeText}
            icon={badgeIcon}
            bgColor={'bg-darkGray'}
            textColor={'text-white'}
          />
        ) : (
          <ImageWrapper
            src={icon}
            alt={'Maskhr Logo'}
            width={140}
            height={80}
            style={'bg-contain bg-center bg-no-repeat'}
          />
        )}
      </AnimationWrapper>
      <div className="flex flex-col gap-4 md:w-3/5">
        {' '}
        <HeaderOne
          text={title}
          color={'text-white'}
          size={'text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px]'}
        />
        <div className="px-[6vw] md:px-[8vw]">
          {' '}
          <MainText text={subtitle} color={'text-white/50'} />
        </div>
      </div>
    </div>
  );
}
