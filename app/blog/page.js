import BlogCard from '@/components/card/BlogCard';
import LoginForm from '@/components/form/LoginForm';
import OtherPageHero from '@/components/hero/OtherPageHero';
import LightPageStarter from '@/components/section/LightPageStarter';
import { HeaderOne } from '@/components/typography/HeaderOne';
import MainText from '@/components/typography/MainText';
import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';
import PageBorders from '@/components/Wrappers/PageBorders';
import Link from 'next/link';
import LogoWhite from '@/public/images/logoWhite.png';
import PaginationButton from '@/components/Wrappers/PaginationWrapper';
import features5 from '@/public/images/featuresbg/features5.png';
import { MainButton } from '@/components/button/MainButton';
import AnimationWrapper from '@/components/Wrappers/AnimationWrapper';

export const metadata = {
  title: 'Mask HR',
  description: 'Welcome to Mask HR',
};

export default function Home() {
  const ourFeaturedBlog = [
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
  ];

  const ourBlogPost = [
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          title={'MaskHR Blog'}
          subtitle={
            'Expertise at your fingertips. Access our Insights on remote hiring and more'
          }
        />
        <PageBorders>
          <div className="flex flex-col gap-4 md:gap-8">
            {' '}
            <AnimationWrapper
              stagger
              direction="y"
              distance={100}
              className="w-full overflow-hidden pb-[5px]"
            >
              {' '}
              <HeaderOne text={'Featured Blog Post'} textLeft={true} />
            </AnimationWrapper>{' '}
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {/* image */}
              <div className="h-[40vh] rounded-[30px] bg-features5 bg-cover bg-top bg-no-repeat md:h-full" />
              {/* text */}{' '}
              <div className="flex flex-col gap-4 p-[30px] md:gap-8">
                <MainText
                  text={'HR INSIGHTS . 10 MIN'}
                  textLeft={true}
                  bold={true}
                />
                <HeaderOne
                  text={
                    'Building a world-class hiring service team with MaskHR'
                  }
                  textLeft={true}
                />
                <p className="flex justify-center text-[14px] leading-[14px] text-mainBlack md:justify-start md:text-[16px] md:leading-[16px]">
                  {`Jan 17, ${new Date().getFullYear()}  `}
                </p>
                <MainText
                  text={
                    'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  '
                  }
                  color="text-secondary"
                  textLeft={true}
                />

                {/* button */}
                <Link href={'/'}>
                  <button
                    className={`font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-[24px] text-[16px] font-normal leading-[16px] text-primary md:justify-start md:text-[20px] lg:leading-[20px]`}
                  >
                    {'Read Now >'}
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              {ourFeaturedBlog.map((item, index) => (
                <AnimationWrapper
                  key={index}
                  stagger
                  direction="y"
                  distance={-100}
                  delay={index * 0.2}
                  className="h-full w-full"
                >
                  {' '}
                  <BlogCard
                    heading={item.heading}
                    bgImg={item.bgImg}
                    title={item.title}
                    subtitle={item.subtitle}
                    btnLink={item.btnLink}
                    btnText={item.btnText}
                  />
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </PageBorders>
        <DoublePageBorders
          background={'bg-footerbg bg-cover bg-no-repeat bg-center'}
        >
          <div className="flex flex-col gap-4 md:gap-8" id="FAQs">
            <LightPageStarter
              icon={LogoWhite}
              title={'Join US! Upcoming MaskHR Webminars'}
              subtitle={
                "Whether you're looking for expert advice from HR leaders or ideas for upleveling your workplace, MaskHR's webinars have you covered."
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
                    text={'Register Now'}
                    hasIcon={true}
                    bgcolor={'bg-darkGray'}
                  />
                </Link>
              </div>
            </AnimationWrapper>
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div className="flex flex-col gap-4 md:gap-8">
            <HeaderOne text={'All Blog Post'} textLeft={true} />

            <PaginationButton itemsPerPage={6}>
              {ourBlogPost.map((item, index) => (
                <BlogCard
                  key={index}
                  heading={item.heading}
                  bgImg={item.bgImg}
                  title={item.title}
                  subtitle={item.subtitle}
                  btnLink={item.btnLink}
                  btnText={item.btnText}
                />
              ))}
            </PaginationButton>
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
