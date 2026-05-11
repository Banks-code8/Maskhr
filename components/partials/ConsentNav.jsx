"use client";

import React, { useState, useEffect } from "react";
import { Drawer } from "rizzui";
import NormalText from "@/components/typography/NormalText";
import FooterTitle from "../typography/FooterTitle";
import { OutlineButton } from "../button/OutlineButton";
import { MainButton } from "../button/MainButton";
import Link from "next/link";

export default function ConsentNav() {
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    const cookiesConsentStatus = localStorage.getItem("cookie_consent");
    if (cookiesConsentStatus === "true") {
      setDrawerState(false);
    } else {
      setDrawerState(true);
    }
  }, []);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          if (drawerState === false) {
            setDrawerState(true);
          }
        }}
        className="relative inline-flex cursor-pointer text-mainBlack font-Gilroy "
      >
        <NormalText text="Cookie Preference" color={"text-mainBlack"} />
      </div>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        placement="bottom"
        size="sm"
      >
        <div className="min-h-full flex flex-col gap-2 bg-white p-[10px] md:p-[40px] pr-[10px] md:pr-0">
          <FooterTitle
            text={"This website uses cookies"}
            color={"text-black"}
          />
          <NormalText text="We use cookies to enhance your browsing experience, provide personalized content and ads, and analyze our traffic. By continuing to use this site, you consent to our use of cookies in accordance with our Cookie Policy." />
          <div className="flex gap-4 justify-start md:justify-center items-center mt-2">
            <div
              onClick={() => {
                setDrawerState(false);
                localStorage.setItem("cookie_consent", false);
              }}
            >
              <OutlineButton text={"Reject All"} />
            </div>
            <div
              onClick={() => {
                localStorage.setItem("cookie_consent", true);
                setDrawerState(false);
              }}
            >
              <MainButton text={"Accept All"} />
            </div>
            <Link href="/cookie-policy">
              <OutlineButton text={"Learn More"} />
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
}
