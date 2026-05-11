"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeaderOne } from "../typography/HeaderOne";
import MainText from "../typography/MainText";

gsap.registerPlugin(ScrollTrigger);

const Verification = ({ titleColor }) => {
  const itemsRef = useRef([]);

  const ourVerifications = [
    { title: 90, suffix: "%", subtitle: "Retention Rate" },
    { title: 15, suffix: "k", subtitle: "Agents in our global talent pool" },
    {
      title: 48,
      suffix: "+hrs",
      subtitle: "To meet your first candidate and start scaling your team",
    },
  ];

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      const target = ourVerifications[i].title;
      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // starts counting when in view
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          el.innerText = `${Math.floor(obj.value)}${ourVerifications[i].suffix}`;
        },
      });
    });
  }, []);

  return (
    <div className="shadow-custom-secondary mx-[8vw] my-[8vw] flex flex-col items-center gap-4 rounded-[10px] bg-white px-[4vw] py-[8vh] md:gap-8 md:rounded-[20px]">
      <HeaderOne text={"See Verifiable Numbers"} />

      <div className="grid w-full gap-4 md:grid-cols-3 md:justify-between">
        {ourVerifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 px-[20px]"
          >
            <h2
              ref={(el) => (itemsRef.current[index] = el)}
              className={`${
                titleColor ? "text-primary" : "text-mainBlack"
              } font-lato text-[48px] font-semibold tracking-tight`}
            >
              0{item.suffix}
            </h2>
            <MainText text={item.subtitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verification;
