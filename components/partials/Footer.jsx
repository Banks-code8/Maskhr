import Link from 'next/link';
import SocialMediaItem from '../section/SocialMediaItem';
import ImageWrapper from '../Wrappers/ImageWrapper';
import logo from '@/public/images/logo.png';
import FooterTitle from '@/components/typography/FooterTitle';
import NormalText from '@/components/typography/NormalText';
import ConsentNav from './ConsentNav';
import MainText from '../typography/MainText';
import PageBorders from '../Wrappers/PageBorders';

export default function Footer() {
  const routeItems = [
    {
      title: 'Company',
      items: [
        { path: '/candidates', subtitle: 'Careers' },
        { path: '/about', subtitle: 'About' },
        { path: '/company', subtitle: 'Services' },
        { path: '/blog', subtitle: 'Blog' },
      ],
    },

    {
      title: 'Support',
      items: [
        { path: '/#contact', subtitle: 'Contact us' },
        { path: '/#schedule', subtitle: 'Schedule demo' },
        { path: '/#support', subtitle: 'Support' },
        { path: '/#FAQs', subtitle: 'FAQs' },
      ],
    },

    {
      title: 'info',
      items: [
        { path: '/cookie-policy', subtitle: 'Terms of use' },
        { path: '/cookie-policy', subtitle: 'License' },
        { path: '/cookie-policy', subtitle: 'Privacy Policy' },
        { path: '/cookie-policy', subtitle: 'Privacy' },
      ],
    },
  ];

  return (
    <footer className="space-y-4 md:space-y-8">
      <div className="grid gap-4 px-[4vw] md:grid-cols-2 md:gap-8">
        {/* --- Logo --- */}
        <div className="flex flex-col items-center justify-between gap-4 pr-[20px] md:items-start">
          <ImageWrapper
            src={logo}
            width={140}
            height={80}
            alt="MaskHr Logo"
            style={'bg-center bg-contain bg-no-repeat'}
          />
          <MainText
            text={
              'We work with experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience.'
            }
            color={'text-secondary'}
            textLeft={true}
          />
          <SocialMediaItem />
        </div>{' '}
        {/* --- Useful Links --- */}
        <div className="grid w-full grid-cols-3 gap-4 md:gap-8">
          {routeItems.map((section, i) => (
            <div key={i} className="flex flex-col gap-4">
              <FooterTitle text={section.title} textLeft={true} />
              <div className="flex flex-col gap-2">
                {section.items.map((item, index) => (
                  <Link key={index} href={item.path} className="">
                    <MainText
                      text={item.subtitle}
                      textLeft={true}
                      color={
                        'text-secondary hover:text-mainBlack hover:font-semibold'
                      }
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <hr className="border-[.2px] border-secondary border-opacity-30" /> */}
      {/* --- Bottom Section --- */}
      <section className="flex w-full items-center justify-center gap-4 bg-lightGray py-4 pl-[8vh] text-center md:justify-start md:gap-8 md:text-left lg:text-right">
        <p className="text-[8px] font-bold leading-[10px] text-mainBlack md:text-[16px] md:leading-[16px]">
          {`© ${new Date().getFullYear()} - TinqLab`}
        </p>
        <p className="text-[8px] font-semibold leading-[10px] text-secondary md:text-[14px] md:leading-[16px]">
          {'Info@tinqlab.com'}
        </p>{' '}
        <p className="text-[8px] font-semibold leading-[10px] text-secondary md:text-[14px] md:leading-[16px]">
          {'Maintained with love by TinqLab'}
        </p>
      </section>
    </footer>
  );
}
