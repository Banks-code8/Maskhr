'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import MainText from '../typography/MainText';
import { MainButton } from '../button/MainButton';
import { OutlineButton } from '../button/OutlineButton';
import ImageWrapper from '../Wrappers/ImageWrapper';
import Link from 'next/link';

const MainHero = ({
  title = [],
  subtitle,
  btnText1,
  btnText2,
  hasTech,
  technologies = [],
  titleSize,
  btnLink1,
  btnLink2,
}) => {
  const containerRef = useRef(null);

  const positions = [
    'top-5 left-60',
    'top-60 left-10',
    'bottom-30 left-60',
    'top-5 right-60',
    'top-60 right-10',
    'bottom-30 right-60',
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // TITLE
      tl.from('.hero-title span', {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
      });

      // SUBTITLE
      tl.from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 15,
          duration: 0.6,
        },
        '-=0.3'
      );

      // BUTTONS
      tl.from(
        '.hero-btn',
        {
          opacity: 0,
          y: 25,
          stagger: 0.15,
          duration: 0.5,
        },
        '-=0.2'
      );

      // ICONS FROM CENTER -> POSITION
      const icons = gsap.utils.toArray('.tech-icon');

      if (icons.length) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        icons.forEach((el) => {
          const r = el.getBoundingClientRect();

          const dx = centerX - (r.left - rect.left);
          const dy = centerY - (r.top - rect.top);

          gsap.set(el, {
            x: dx,
            y: dy,
            scale: 0.3,
            opacity: 0,
          });

          tl.to(
            el,
            {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.4'
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-screen bg-herobg bg-cover bg-center bg-no-repeat">
      <div className="h-full px-[6vw] py-[4vh]" ref={containerRef}>
        <div className="relative flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center md:w-3/4">
            {/* TITLE */}
            <h1
              className={`hero-title ${
                titleSize ? titleSize : 'text-[32px] leading-[38px]'
              } font-lato font-bold tracking-normal`}
            >
              {title.map((ld, i) => (
                <span key={i} className={ld.color || 'text-mainBlack'}>
                  {ld.text}{' '}
                </span>
              ))}
            </h1>

            {/* SUBTITLE */}
            {subtitle && (
              <div className="hero-subtitle px-[6vw] md:px-[8vw]">
                <MainText text={subtitle} color="text-mainBlack/50" />
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-4 flex justify-center gap-4 md:gap-8">
              {btnText1 && btnLink1 && (
                <Link href={btnLink1} className="hero-btn">
                  <MainButton text={btnText1} hasIcon={true} />
                </Link>
              )}
              {btnText2 && btnLink2 && (
                <Link href={btnLink2} className="hero-btn">
                  <OutlineButton text={btnText2} hasIcon={true} />
                </Link>
              )}
            </div>

            {/* TECH ICONS */}
            {hasTech && technologies.length > 0 && (
              <div>
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`tech-icon absolute hidden rounded-[20px] bg-white p-4 shadow-custom-secondary xl:block ${
                      positions[index % positions.length]
                    }`}
                  >
                    <ImageWrapper
                      src={tech}
                      alt={`Tech Icon ${index + 1}`}
                      width={80}
                      height={80}
                      style="w-20 h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
