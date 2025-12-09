import Image from "next/image";
import Hero from "../features/Hero/Page"
import Aboutt, { AboutUs, WobbleCardDemo } from "../features/WhyUs/Page";
import WhyUs from "../features/WhyUs/Page";
import FindUs from "@/features/FindUs/Page";
export default function Home() {
  return (
    <>
    <Hero />
    <WhyUs />
    <FindUs />

    </>
  );
}
