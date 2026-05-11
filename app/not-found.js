"use client";

import { MainButton } from "@/components/button/MainButton";
import PageStarter from "@/components/section/PageStarter";
import Link from "next/link";
import PageBorders from "@/components/Wrappers/PageBorders";
import MainText from "@/components/typography/MainText";

export default function Page() {
  return (
    <center className="min-h-screen grid grid-cols-1 justify-items-center">
      <div className=" divide-y-8 flex flex-col justify-start items-center text-center ">
        <PageBorders>
          <MainText
            text={"Page not found"}
            color={"text-[#131313]"}
            size={
              "text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] "
            }
          />
          <div className="my-[20px]"></div>
          <MainText text=" The resources you requested for does not exist, Please go back home." />
          <div className="my-[20px]"></div>
          <Link href="/">
            <MainButton text={"Go Home"} />
          </Link>
        </PageBorders>
      </div>
    </center>
  );
}
