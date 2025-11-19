// import { SchedulingCalendar } from "@/components/Calender";
import SchedulingCalender from "@/components/SchedulingCalender";
import Image from "next/image";
import LogoBG from "../../public/assets/icons/logo-bg.svg";
import HeroTextBG from "../../public/assets/Hero-text-bg.svg";
import BackgroundDesktopSVG1 from "../../public/assets/icons/Desktop-Vector-1.svg";
import BackgroundDesktopSVG2 from "../../public/assets/icons/Desktop-Vector-3.svg";
import BackgroundMobileSVG1 from "../../public/assets/icons/Mobile-Vector-1.svg";
import BackgroundMobileSVG2 from "../../public/assets/icons/Mobile-Vector-3.svg";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  return (
    <div className="w-full">
      {/* Header */}
      <nav className="w-full max-w-[1364px] px-0 sm:px-10 xl:px-[144px] mb-10 relative">
        <Image
          src={LogoBG}
          alt="background"
          className="absolute bottom-[0%] left-[10%] w-full max-w-[658px] h-[188px] object-contain -z-10"
        />
        <div className="flex items-center">
          <Image
            src={"/assets/Logo-2.svg"}
            alt="logo"
            width={188}
            height={188}
            className="w-[90px] md:w-[188px] h-[188px] object-contain"
          />
          <h1 className="font-poppins font-[900] text-[24px] text-white">
            Spine Shine Media
          </h1>
        </div>
      </nav>

      <main className="w-full max-w-[1364px] mx-auto px-6 sm:px-0  relative">
        {/* Background Images */}
        <Image
          src={BackgroundDesktopSVG1}
          alt="background"
          className="hidden md:block absolute top-[6%] left-[12%] w-[1200px] h-[1300px] object-contain -z-10"
        />
        <Image
          src={BackgroundDesktopSVG2}
          alt="background"
          className="hidden md:block absolute bottom-[17%] right-[13%] w-[1200px] h-[1200px] object-contain -z-10"
        />
        <Image
          src={BackgroundMobileSVG1}
          alt="background"
          className="block md:hidden absolute top-[2%] left-[1%] w-[380px] h-[2800px] object-contain -z-10"
        />
        <Image
          src={BackgroundMobileSVG2}
          alt="background"
          className="block md:hidden absolute bottom-[12%] right-[9%] w-[320px] h-[2000px] object-contain -z-20"
        />

        {/* Hero */}
        <div className="w-full flex md:items-center flex-col md:flex-row gap-10 mb-[80px] md:mb-[188px] px-10 xl:px-[144px]">
          <div className="w-full md:w-1/2 max-w-[339px] md:max-w-[636px] flex flex-col">
            {/* Gradeint Text */}
            <div className="relative">
              {/* Text */}
              <h1 className="font-poppins font-[900] text-[21px] md:text-[30px] text-primary mb-3 relative z-[20]">
                Advanced DC <span className="text-white"> & </span> Medical
                Clinics <br /> looking for high quality patients...
              </h1>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[15] 
      bg-[radial-gradient(50%_50%_at_50.79%_43.27%,rgba(0,0,0,0.2226)_0%,rgba(0,0,0,0)_100%)]"
              ></div>

              {/* Background image */}
              <Image
                src={HeroTextBG}
                alt="background"
                width={520}
                height={280}
                className="absolute top-0 right-0 w-[520px] h-[280px] object-contain z-[10]"
              />
            </div>

            <h3 className="font-poppins font-extrabold text-[25px] md:text-[30px] text-white leading-[160%] mb-10">
              10-40 <br /> Qualified <br /> Serious & Income Verified <br />{" "}
              Patients—Every Single Month <br />
              We have an ROI Guarantee—Or It's FREE.
            </h3>

            {/* CTA */}
            <ScrollButton />

            <div className="w-full flex justify-center md:justify-start  mt-[52px]">
              <div className="flex items-center gap-2">
                <p className="font-poppins text-[18px] text-white tracking-[6.08px]">
                  SCROLL NOW
                </p>
                <Image
                  src="/assets/icons/arrow-down.svg"
                  alt="arrow"
                  width={18}
                  height={12}
                  className="w-[18px] h-[12px] object-contain"
                />
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex flex-col items-center h-full max-h-[700px] relative">
            <Image
              src={"/assets/Hero images.png"}
              alt="hero"
              width={477}
              height={637}
              className="w-[313px] md:w-[477px] h-[637px] object-contain"
            />
            <Image
              src={"/assets/4Stars.svg"}
              alt="hero"
              width={212}
              height={292}
              className="w-[82px] h-[82px] object-contain absolute top-[00%] right-[10%]"
            />
          </div>
        </div>

        {/* Our Process */}
        <div
          className="relative z-10 md:z-0 bg-[linear-gradient(287.76deg,rgba(255,215,0,0.1105)_4.64%,rgba(255,215,0,0.0195)_98.6%)]
         w-full h-full max-h-[1500px] lg:max-h-[600px] rounded-md border-4 border-border  
         px-12 md:px-[78px] pt-12 pb-12 md:pb-[70px] mb-[80px] md:mb-[230px]"
        >
          {/* backdrop blur */}
          {/* <div className="z-1 absolute inset-0 bg-foreground backdrop-blur-[44px] rounded-md"></div> */}
          {/* gradient 1 */}
          <Image
            src="/assets/our-process-card-bg.svg"
            alt="bg"
            width={380}
            height={380}
            className="w-[380px] h-[380px] object-contain absolute top-[10%] lg:top-[30%] right-[5%] lg:left-0 -z-10"
          />
          {/* gradient 2 */}
          <Image
            src="/assets/our-process-card-bg.svg"
            alt="bg"
            width={380}
            height={380}
            className="w-[380px] h-[380px] object-contain absolute top-[40%] lg:top-[30%] right-[5%] lg:left-[36%] -z-10"
          />
          {/* gradient 3 */}
          <Image
            src="/assets/our-process-card-bg.svg"
            alt="bg"
            width={380}
            height={380}
            className="w-[380px] h-[380px] object-contain absolute top-[75%] lg:top-[30%] right-[20%] lg:right-[0%] -z-10"
          />
          {/* Content */}
          <h2 className="text-center font-poppins font-extrabold text-[32px] text-white mb-12 md:mb-[78px]">
            Our Process
          </h2>
          <div className="ProcessCard-Container w-full flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-6 relative">
            {/* process 1 */}
            <div className="card-1 flex flex-col items-center gap-10 z-10 h-full max-h-[280px] relative overflow-visible">
              <Image
                src={"/assets/icons/Rocket.svg"}
                alt="logo"
                width={110}
                height={110}
                className="w-[110px] h-[110px] object-contain"
              />
              <h3 className="w-full max-w-[200px] text-center font-poppins font-extrabold text-[18px] md:text-[22px] text-white">
                Grow your practice with a custom program
              </h3>
              {/* gradient 1 */}
              <Image
                src="/assets/our-process-card-bg.svg"
                alt="bg"
                width={380}
                height={380}
                className="w-[380px] h-[380px] object-contain absolute bottom-[-50%] left-0 -z-10"
              />
            </div>
            {/* Arrow Right (Desktop) */}
            <Image
              src={"/assets/icons/arrow-right.svg"}
              alt="logo"
              width={331}
              height={6}
              className="hidden lg:block w-full max-w-[200px] xl:max-w-[321px] h-6px mb-[140px]"
            />
            {/* Arrow Down mobile */}
            <Image
              src={"/assets/icons/arrow-down-yellow.svg"}
              alt="logo"
              width={6}
              height={77}
              className="block lg:hidden w-[76px] h-[60px]"
            />
            {/* process 2 */}
            <div className="card-2 flex flex-col items-center gap-10 z-10 h-full max-h-[250px] relative">
              <Image
                src={"/assets/icons/Scale.svg"}
                alt="logo"
                width={110}
                height={110}
                className="w-[110px] h-[110px] object-contain"
              />
              <h3 className="w-full max-w-[200px] text-center font-poppins font-extrabold text-[18px] md:text-[22px] text-white">
                Win more patients with personalized video
              </h3>
              {/* gradient 1 */}
              <Image
                src="/assets/our-process-card-bg.svg"
                alt="bg"
                width={380}
                height={380}
                className="w-[380px] h-[380px] object-contain absolute bottom-[-50%] left-0 -z-10"
              />
            </div>

            {/* Arrow Right (Desktop) */}
            <Image
              src={"/assets/icons/arrow-right.svg"}
              alt="logo"
              width={331}
              height={6}
              className="hidden lg:block w-full max-w-[200px] xl:max-w-[321px] h-6px mb-[140px]"
            />
            {/* Arrow Down mobile */}
            <Image
              src={"/assets/icons/arrow-down-yellow.svg"}
              alt="logo"
              width={6}
              height={77}
              className="block lg:hidden w-[76px] h-[60px]"
            />
            {/* process 3 */}
            <div className="card-3 flex flex-col items-center gap-10 z-10 h-full max-h-[250px] relative">
              <Image
                src={"/assets/icons/Cycle.svg"}
                alt="logo"
                width={110}
                height={110}
                className="w-[110px] h-[110px] object-contain"
              />
              <h3 className="w-full max-w-[200px] text-center font-poppins font-extrabold text-[18px] md:text-[22px] text-white">
                Monitor KPIs to grow your practice
              </h3>
              {/* gradient 1 */}
              <Image
                src="/assets/our-process-card-bg.svg"
                alt="bg"
                width={380}
                height={380}
                className="w-[380px] h-[380px] object-contain absolute bottom-[-50%] left-0 -z-10"
              />
            </div>
          </div>
        </div>

        {/* Calender */}
        <div
          id="calendar-section"
          className="w-full flex flex-col-reverse lg:flex-row justify-between gap-15 md:gap-3 px-10"
        >
          <div className="md:min-w-[516px] flex flex-col items-center">
            {/* <SchedulingCalendar /> */}
            <SchedulingCalender />
          </div>
          <div className="w-full lg:max-w-[380px] xl:max-w-[580px] flex flex-col">
            <h2 className="text-primary font-poppins font-bold text-[21px] md:text-[24px] mb-4 ">
              SCHEDULE YOUR CALL WITH OUR TEAM
            </h2>
            <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-10">
              Get Pre-Qualified patients who show up — ready for treatment
            </p>
            <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-10">
              Tired of no-shows, unqualified leads, and wasted ad spend?
            </p>
            <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-10">
              In this 15-minute discovery call I’ll show exactly how Spine Shine
              Media delivers financially qualified patients straight to your
              practice — so you can stop chasing bad leads and focus on care.
            </p>

            <div className="mb-12">
              <h3 className="text-primary font-poppins font-bold text-2xl mb-10">
                What we’ll cover:
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="text-white font-poppins font-bold text-2xl mb-4">
                  How we Pre-Qualify patients before they book, ready to pay.
                </li>
                <li className="text-white font-poppins font-bold text-2xl mb-4">
                  How we secure a card on file to cut no-shows and fill your
                  schedule with patients.
                </li>
                <li className="text-white font-poppins font-bold text-2xl mb-4">
                  How we manage 100% of your marketing and follow-ups.
                </li>
              </ul>
            </div>

            <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-3">
              Ready to reclaim your schedule? Book your 15-minute call.
            </p>
            <p className="text-white font-poppins font-extrabold text-[24px] mb-10">
              (No pitch, just an informal chat to see if we can help you out in
              the first place)
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full flex flex-col items-center mt-[324px] md:mt-[190px] mb-[100px]">
          <div className="w-full max-w-[577px] min-h-[412px] rounded-[20px] bg-[linear-gradient(135.37deg,rgba(255,215,0,0.27)_0%,rgba(255,215,0,0.04)_100%)] border-4 border-border pt-6 px-10 pb-[70px]">
            <h1 className="text-primary font-poppins font-bold text-[49px] mb-4 bg-transparent">
              Have A General Inquiry?
            </h1>
            <p className="text-white font-poppins font-bold text-[20px] bg-transparent">
              If you have a general inquiry and would like to speak to our
              expert team, you can contact us via email at:
            </p>
            <div className="flex items-center gap-2 bg-transparent mt-5">
              <Image
                src={"/assets/icons/email.svg"}
                alt="logo"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-contain bg-transparent"
              />
              <p className="text-white font-extrabold bg-transparent mt-2">
                spineshinemedia@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer  */}
      <div className="w-full bg-foreground flex items-center justify-between px-6 sm:px-12">
        <Image
          src={"/assets/icons/FooterLogo.svg"}
          alt="logo"
          width={70}
          height={70}
          className="w-[70px] h-[70px] object-contain bg-transparent"
        />
        <h2 className="text-white font-poppins font-normal text-[18px] bg-transparent">
          Spine Shine Media
        </h2>
        <div className="flex items-center gap-2 bg-transparent">
          <Image
            src={"/assets/icons/social-x.svg"}
            alt="logo"
            width={24}
            height={24}
            className="w-[16px] h-[16px] object-contain bg-transparent"
          />
          <Image
            src={"/assets/icons/social-fb.svg"}
            alt="logo"
            width={24}
            height={24}
            className="w-[16px] h-[16px] object-contain bg-transparent"
          />
          <Image
            src={"/assets/icons/social-linkedin.svg"}
            alt="logo"
            width={24}
            height={24}
            className="w-[16px] h-[16px] object-contain bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
