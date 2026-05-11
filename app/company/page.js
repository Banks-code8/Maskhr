import MainHero from '@/components/hero/MainHero';
import PageBorders from '@/components/Wrappers/PageBorders';
import react from '@/public/images/tech/React.png';
import python from '@/public/images/tech/Python.png';
import figma from '@/public/images/tech/figma2.png';
import boxfigma from '@/public/images/tech/Figma.png';
import aws from '@/public/images/tech/Aws.png';
import headphone from '@/public/images/tech/headphone.png';
import zendex from '@/public/images/tech/Zendex.png';
import callCenter from '@/public/images/tech/CallCenter.png';
import translators from '@/public/images/tech/Translators.png';
import PageStarter from '@/components/section/PageStarter';
import HiringCard from '@/components/card/HiringCard';
import features2 from '@/public/images/featuresbg/features2.png';
import features3 from '@/public/images/featuresbg/features3.png';
import vector1 from '@/public/images/icons/vector1.png';
import vector2 from '@/public/images/icons/vector2.png';
import vector3 from '@/public/images/icons/vector3.png';
import vector4 from '@/public/images/icons/vector4.png';
import vector5 from '@/public/images/icons/vector5.png';
import ConceptCard from '@/components/card/ConceptCard';
import LightPageStarter from '@/components/section/LightPageStarter';
import TechStack from '@/components/card/TechStack';
import { MainButton } from '@/components/button/MainButton';
import Link from 'next/link';
import BenefitCard from '@/components/card/BenefitCard';
import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';
import LogoWhite from '@/public/images/logoWhite.png';
import Verification from '@/components/section/Verification';
import SignUpForm from '@/components/form/SignUpForm';
import features1 from '@/public/images/featuresbg/features1.png';
import AnimationWrapper from '@/components/Wrappers/AnimationWrapper';

export const metadata = {
  title: 'Mask HR',
  description: 'Welcome to Mask HR',
};

export default function Home() {
  const technologies = [boxfigma, headphone, react, aws, callCenter, python];

  const titleText = [
    { text: 'Grow', color: 'text-mainBlack' },
    { text: 'your team with', color: 'text-primary' },
    { text: 'top talents,', color: 'text-mainBlack' },
    { text: 'cut your', color: 'text-primary' },
    { text: 'cost', color: 'mainBlack' },
  ];

  const weHire = [
    {
      title: 'High Attrition',
      rate: '65%',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      cardType: 'type1',
    },
    {
      title: 'Rising payroll Cost',
      bgImg: features2,
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      cardType: 'type2',
    },
    {
      title: 'Cross-border Hiring Headaches',
      bgImg: features3,
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',

      cardType: 'type2',
    },
    {
      title: 'Unqualified Candidatess',
      bgImg: features1,
      subtitle:
        'Most companies are already working remotely in some capacity, making it easy to add MaskHR team members. The team members are hired and paid by us, but work like any other remote hire would at your company via a staff augmentation model.',
      cardType: 'type1',
    },
  ];

  const weInnovate = [
    {
      title: 'Introduction',
      subtitle: 'Interested talents sign-up onMaskhr and creates profile',
    },
    {
      title: 'Interviews',
      subtitle:
        'Applicants skills and qualification will be evaluated by AI & Humans ',
    },
    {
      title: 'Onboarding',
      subtitle:
        'Upon passing the test, talents are activated onMaskhr and will be available for projects',
    },
  ];

  const techWeUse = [
    {
      icon: figma,
      title: 'UI/UX Designers',
    },
    {
      icon: aws,
      title: 'Data Entry',
    },
    {
      icon: callCenter,
      title: 'Call Center Associates',
    },
    {
      icon: python,
      title: 'Developers',
    },
    {
      icon: zendex,
      title: 'Live chat/email support',
    },
    {
      icon: translators,
      title: 'Translators',
    },
  ];

  const staffingInsight = [
    {
      subtitle: 'Find Verified Experts with Industry Level Experience',
      badge: 'Old-school ways',
      badgeColor: 'bg-lightGray text-mainBlack',
      bgColor: 'bg-secondary text-mainBlack',
    },
    {
      subtitle: 'Find Verified Experts with Industry Level Experience',
      badge: 'The New Way',
      badgeColor: 'bg-primary text-white',
      bgColor: 'bg-mainBlack text-white',
    },
  ];

  const ourAdvantages = [
    {
      bgImg: 'bg-benefit1',
      title: 'Technology / Software',
      subtitle:
        'We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently ',
    },

    {
      bgImg: 'bg-benefit2',
      title: 'Insurance / Healthcare',
      subtitle:
        'We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently ',
    },

    {
      bgImg: 'bg-benefit3',
      title: 'Direct sales Organisations',
      subtitle:
        'We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently ',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainHero
        title={titleText}
        subtitle={
          'Seamlessly integrate top remote talents to your team all on your own terms. MaskHR will provide you round the clock cover for your hiring process.'
        }
        titleSize="text-[50px] leading-[50px]"
        btnLink1={'/'}
        btnText1="Find Talents"
        hasTech={true}
        technologies={technologies}
      />
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector1}
            badgeText={'Boosting Recruitment Process'}
            title={'Solving Business Growing Pains'}
            subtitle={
              'A convenient recruitment and staffing model that simultaneously empowers companies and careers.'
            }
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {weHire.map((item, index) => (
              <HiringCard
                key={index}
                title={item.title}
                bgImg={item.bgImg}
                rate={item.rate}
                subtitle={item.subtitle}
                cardType={item.cardType}
              />
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector2}
            badgeText={'Connecting talents to teams'}
            title={'How it Works'}
            subtitle={
              'We work with Experience individuals whose talents we have carefully vetted and handpicked intoour talent pool. This ensures we consistently deliver high end results.'
            }
          />
          <div className="grid gap-0 md:grid-cols-3">
            {weInnovate.map((item, index) => (
              <div key={index}>
                <ConceptCard
                  index={index + 1}
                  title={item.title}
                  subtitle={item.subtitle}
                />{' '}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders background={'bg-IntersectUp bg-cover bg-top bg-no-rerpeat'}>
        <div className="flex flex-col gap-4 md:gap-8">
          <LightPageStarter
            hasBadge={true}
            badgeIcon={vector3}
            badgeText={'Industry'}
            title={'The Industry We Cover'}
            subtitle={
              'We work with Experience individuals whose talents we have carefully vetted and handpicked intoour talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience.'
            }
          />

          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {ourAdvantages.map((item, index) => (
              <BenefitCard
                key={index}
                bgImg={item.bgImg}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </PageBorders>{' '}
      <PageBorders
        background={'bg-IntersectDown bg-cover bg-bottom bg-no-rerpeat'}
        padding={null}
      >
        <div className="flex flex-col gap-4 py-[10vh] md:gap-8">
          <LightPageStarter
            hasBadge={true}
            badgeIcon={vector4}
            badgeText={'Jobs we do'}
            title={'Get Remote Role Experts with Industry Level Experience'}
            subtitle={
              'We work with experience individuals whose talents we have carefully vetted and handpicked intoour talent pool. This ensures we consistently deliver high end results with the right skillset working with best tools and industry experience.'
            }
          />
          <div className="grid grid-cols-3 gap-4 px-[10px] md:gap-8 lg:grid-cols-6">
            {techWeUse.map((item, index) => (
              <AnimationWrapper
                key={index}
                delay={index * 0.2}
                stagger
                direction="y"
                distance={-100}
                className="h-full w-full"
              >
                <TechStack icon={item.icon} title={item.title} />
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </PageBorders>{' '}
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector5}
            badgeText={'Our Model'}
            title={'Staffing the New Way'}
            subtitle={
              'Explore the latest trends, tips, and innovations in recruitments. Our blog offers expert insights to keep you at the forefront of recent openings.   '
            }
          />
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {staffingInsight.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 md:gap-8">
                <span
                  className={`${item.badgeColor} mx-auto w-fit rounded-[24px] px-[20px] py-[15px] text-[14px] font-semibold shadow-custom-secondary`}
                >
                  {item.badge}
                </span>
                <div
                  className={`${item.bgColor} flex min-h-[40vh] flex-col items-center justify-center rounded-[10px] p-[20px] shadow-custom-secondary md:rounded-[20px] md:p-[30px]`}
                >
                  <p className="font-lato text-center text-[18px] font-semibold leading-[20px] tracking-normal md:text-left md:text-[22px] md:leading-[28px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders padding={null}>
        <Verification />
      </PageBorders>
      <DoublePageBorders
        background={'bg-footerbg bg-cover bg-no-repeat bg-center'}
      >
        <div className="flex flex-col gap-4 md:gap-8" id="contact">
          <LightPageStarter
            icon={LogoWhite}
            title={'Book a meeting!'}
            subtitle={
              'Schedule a day with the team to discuss your needs and requirements we will find matching talents from our pool in due time'
            }
          />{' '}
          <AnimationWrapper
            stagger
            direction="x"
            distance={-100}
            className="h-full w-full"
          >
            <div className="grid justify-items-center">
              <Link href={'/sign-up'}>
                <MainButton
                  text={'Start Hiring'}
                  hasIcon={true}
                  bgcolor={'bg-darkGray'}
                />
              </Link>{' '}
            </div>{' '}
          </AnimationWrapper>
        </div>
      </DoublePageBorders>
    </div>
  );
}
