import MainHero from '@/components/hero/MainHero';
import PageBorders from '@/components/Wrappers/PageBorders';
import react from '@/public/images/tech/React.png';
import python from '@/public/images/tech/Python.png';
import boxfigma from '@/public/images/tech/Figma.png';
import aws from '@/public/images/tech/Aws.png';
import callCenter from '@/public/images/tech/CallCenter.png';
import headphone from '@/public/images/tech/headphone.png';
import PageStarter from '@/components/section/PageStarter';
import HiringCard from '@/components/card/HiringCard';
import features2 from '@/public/images/featuresbg/features2.png';
import features3 from '@/public/images/featuresbg/features3.png';
import vector1 from '@/public/images/icons/vector1.png';
import vector2 from '@/public/images/icons/vector2.png';
import vector5 from '@/public/images/icons/vector5.png';
import ConceptCard from '@/components/card/ConceptCard';
import LightPageStarter from '@/components/section/LightPageStarter';
import { MainButton } from '@/components/button/MainButton';
import Link from 'next/link';
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
    { text: 'Mask it,', color: 'text-mainBlack' },
    { text: 'Find Flexible', color: 'text-primary' },
    { text: 'Opportunities', color: 'text-mainBlack' },
    { text: 'With', color: 'text-mainBlack' },

    { text: 'Growth', color: 'text-primary' },
    { text: 'Potential', color: 'mainBlack' },
  ];

  const weHire = [
    {
      title: 'Earn More',
      rate: '65%',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      cardType: 'type1',
    },
    {
      title: 'Find Remote Roles',
      bgImg: features2,
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      cardType: 'type2',
    },
    {
      title: 'We Focus On Growth',
      bgImg: features3,
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',

      cardType: 'type2',
    },
    {
      title: 'Continuous Mentoring ',
      bgImg: features1,
      subtitle:
        'Most companies are already working remotely in some capacity, making it easy to add MaskHR team members. The team members are hired and paid by us, but work like any other remote hire would at your company via a staff augmentation model.',
      cardType: 'type1',
    },
  ];

  const weInnovate = [
    {
      title: 'Apply',
      subtitle: 'Interested talents sign-up onMaskhr and creates profile',
    },
    {
      title: 'Prepare',
      subtitle:
        'Applicants skills and qualification will be evaluated by AI & Humans ',
    },
    {
      title: 'Interview',
      subtitle:
        'Upon passing the test, talents are activated onMaskhr and will be available for projects',
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainHero
        title={titleText}
        subtitle={
          "We'll connect you with a life-changing work opportunity and career path."
        }
        titleSize="text-[50px] leading-[50px]"
        btnLink1={'/'}
        btnText1="Find Job"
        hasTech={true}
        technologies={technologies}
      />
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector1}
            badgeText={'Boosting Recruitment Process'}
            title={'Revolutionizing Remote Work for Maximum Growth'}
            subtitle={
              'Learn new skills, find compactible roles with growth opportunities. Our jobs provides great flexibility forall available opening. '
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
          />{' '}
          <div className="grid gap-0 md:grid-cols-3">
            {weInnovate.map((item, index) => (
              <div key={index}>
                {' '}
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
                  className={`${item.bgColor} flex min-h-[40vh] items-center justify-center rounded-[10px] p-[20px] shadow-custom-secondary md:rounded-[20px] md:p-[30px]`}
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
        <Verification />{' '}
      </PageBorders>
      <DoublePageBorders
        background={'bg-footerbg bg-cover bg-no-repeat bg-center'}
      >
        <div className="flex flex-col gap-4 md:gap-8" id="schedule">
          <LightPageStarter
            icon={LogoWhite}
            title={'Apply for a position at MaskHR'}
            subtitle={
              'Fill out our application form to be considered for remote workopportunities'
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
                  text={'Get Started'}
                  hasIcon={true}
                  bgcolor={'bg-darkGray'}
                />
              </Link>{' '}
            </div>
          </AnimationWrapper>
        </div>
      </DoublePageBorders>
    </div>
  );
}
