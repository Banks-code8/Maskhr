import { MainButton } from '@/components/button/MainButton';
import OtherPageHero from '@/components/hero/OtherPageHero';
import PageStarter from '@/components/section/PageStarter';
import TextLeftPageStarter from '@/components/section/TextLeftPageStarter';
import { HeaderOne } from '@/components/typography/HeaderOne';
import MainText from '@/components/typography/MainText';
import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';
import PageBorders from '@/components/Wrappers/PageBorders';
import Link from 'next/link';
import LogoWhite from '@/public/images/logoWhite.png';
import LoginForm from '@/components/form/LoginForm';
import LightPageStarter from '@/components/section/LightPageStarter';
import features6 from '@/public/images/featuresbg/features6.png';
import features7 from '@/public/images/featuresbg/features7.png';
import features8 from '@/public/images/featuresbg/features8.png';
import ImageWrapper from '@/components/Wrappers/ImageWrapper';
import about1 from '@/public/images/about1.png';
import about2 from '@/public/images/about2.png';
import about3 from '@/public/images/about3.png';
import value1 from '@/public/images/icons/value1.png';
import value2 from '@/public/images/icons/value2.png';
import value3 from '@/public/images/icons/value3.png';
import value4 from '@/public/images/icons/value4.png';
import AnimationWrapper from '@/components/Wrappers/AnimationWrapper';

export const metadata = {
  title: 'Mask HR',
  description: 'Welcome to Mask HR',
};

export default function Home() {
  const experience = [
    { bgImage: about1 },
    { bgImage: about2 },
    { bgImage: about3 },
  ];

  const ourValue = [
    {
      icon: value1,
      title: 'Collaboration',
      subtitle:
        'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy lifting for you that will be giving a text to speech comfort by the holy ghost',
    },
    {
      icon: value2,
      title: 'Transparency',
      subtitle:
        'When you need to scale your team, then come to us we. Just sit and allow us to the heavy lifting for you that will be giving a text to speech comfort by the holy ghost',
    },
    {
      icon: value3,
      title: 'Integrity',
      subtitle:
        'When you need to scale your team, then come to us we. Just sit and allow us to the heavy lifting for you that will be giving a text to speech comfort by the holy ghost',
    },
    {
      icon: value4,
      title: 'Trust',
      subtitle:
        'When you need to scale your team, then come to us we. Just sit and allow us to the heavy lifting for you that will be giving a text to speech comfort by the holy ghost',
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          title={'Our Company'}
          subtitle={
            "Hiring people with a purpose We've set out to create 10,000 remote jobs in emerging markets."
          }
        />
        <PageBorders>
          {' '}
          <div className="flex flex-col gap-4 md:gap-8">
            {/* image */}{' '}
            <ImageWrapper
              src={features6}
              alt="Mask Hr is global"
              width={1440}
              height={950}
              style="w-full  bg-cover bg-top bg-no-repeat"
            />
            {/* text */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {' '}
              <div className="flex flex-col gap-4 md:gap-8">
                <HeaderOne
                  text={'How MaskHR work with our Clients.'}
                  textLeft={true}
                />{' '}
                <AnimationWrapper
                  stagger
                  direction="x"
                  distance={-100}
                  className="h-full w-full"
                >
                  <div className="grid justify-items-center md:justify-start">
                    <Link href={'/'}>
                      <MainButton text={'Start Hiring'} hasIcon={true} />
                    </Link>
                  </div>
                </AnimationWrapper>
              </div>{' '}
              <div className="flex flex-col gap-4 md:gap-8">
                <MainText
                  text={
                    'Learn new skills, find compactible roles with growth opportunities. Our jobs provides.'
                  }
                  color={'text-secondary'}
                  textLeft={true}
                />
                <MainText
                  text={
                    'Learn new skills, find compactible roles with growth opportunities. Our jobs provides substantial earning for all remote workers '
                  }
                  color={'text-secondary'}
                  textLeft={true}
                />
                <MainText
                  text={
                    'Learn new skills, find compactible roles with growth opportunities. Our jobs provides substantial earning for all remote workers '
                  }
                  color={'text-secondary'}
                  textLeft={true}
                />
              </div>
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <ImageWrapper
              src={features7}
              alt="Mask Hr is global"
              width={1440}
              height={950}
              style="w-full  bg-cover bg-top bg-no-repeat"
            />
            <div className="flex h-full flex-col justify-center gap-4 md:gap-8">
              <HeaderOne text={'Dream Until Your Come True'} textLeft={true} />
              <MainText
                text={
                  'Learn new skills, find compactible roles with growth opportunities. Our jobs provides substantial earning for all remote workers '
                }
                color={'text-secondary'}
                textLeft={true}
              />{' '}
              <AnimationWrapper
                stagger
                direction="x"
                distance={-100}
                className="h-full w-full"
              >
                <div className="grid justify-items-center md:justify-start">
                  <Link href={'/'}>
                    <MainButton text={'Read More'} hasIcon={true} />
                  </Link>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div className="flex flex-col gap-12 md:gap-16">
            <PageStarter
              title={'Our Core Values'}
              subtitle={
                'Our Values shape the culture of our organization and define the character of our company'
              }
            />
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {ourValue.map((item, index) => (
                <div
                  key={index}
                  className="bg-pageGray flex h-full w-full flex-col items-center justify-center gap-4 rounded-[10px] bg-lightGray p-[30px] text-center shadow-custom-secondary"
                >
                  <div>
                    <ImageWrapper
                      src={item.icon}
                      alt="About MaskHr"
                      width={50}
                      height={50}
                      style="-mt-[50px]"
                    />
                  </div>
                  <HeaderOne
                    text={item.title}
                    size={'text-[32px] font-semibold'}
                  />
                  <MainText text={item.subtitle} color={'text-secondary'} />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8 md:gap-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {' '}
              <HeaderOne
                text={'Experience & Integrity by our Team '}
                textLeft={true}
              />{' '}
              <MainText
                text={
                  'The right tools wielded by the right people to make anything possible. from year-to-year we strive to invent the most innovative technology produced by our creative team put together'
                }
                color={'text-secondary'}
                textLeft={true}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {experience.map((item, index) => (
                <div key={index} className="flex h-full">
                  <ImageWrapper
                    src={item.bgImage}
                    alt="Mask Hr is global"
                    width={1440}
                    height={950}
                    style={` bg-cover bg-top bg-no-repeat w-full min-h-[40vh] max-h-[60vh] rounded-[20px] flex-grow transition-transform duration-500 scale-95 hover:scale-105 shadow-custom-secondary`}
                  />{' '}
                </div>
              ))}
            </div>
          </div>
        </PageBorders>

        <PageBorders>
          <PageStarter
            title={'Our Global Presence'}
            subtitle={
              'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy lifting for you'
            }
          />
          <ImageWrapper
            src={features8}
            alt="Mask Hr is global"
            width={1440}
            height={470}
            style="w-full  bg-cover bg-top bg-no-repeat"
          />
        </PageBorders>
        <DoublePageBorders
          background={'bg-footerbg bg-cover bg-no-repeat bg-center'}
        >
          <div className="flex flex-col gap-4 md:gap-8" id="FAQs">
            <LightPageStarter
              icon={LogoWhite}
              title={'Stay in touch'}
              subtitle={
                'Want to hear insights and inspirational stories from our team members from around the world? You know what to do.'
              }
            />{' '}
            <AnimationWrapper
              stagger
              direction="x"
              distance={-100}
              className="h-full w-full"
            >
              <div className="grid justify-items-center">
                {' '}
                <Link href={'/sign-up'}>
                  <MainButton
                    text={'lets go!'}
                    hasIcon={true}
                    bgcolor={'bg-darkGray'}
                  />
                </Link>{' '}
              </div>{' '}
            </AnimationWrapper>
          </div>
        </DoublePageBorders>
      </div>
    </div>
  );
}
