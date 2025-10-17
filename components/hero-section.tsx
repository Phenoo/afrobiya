import Image from "next/image";
import BookingForm from "./booking-form";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[600px]  bg-[#F8F9FA] flex-col flex items-center justify-center"
      // style={{
      //   backgroundImage: "url('/hero.png')",
      // }}
    >
      <div className="h-[600px] overflow-hidden w-full relative">
        <Image src={"/hero.png"} alt="hero" fill className="object-cover" />
      </div>
      <div className="flex items-center justify-center w-full absolute top-20 z-30">
        <div className="relative z-10 text-center  w-full  mx-auto px-4 ">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Find Your Next Stay
          </h1>
          <BookingForm />
        </div>
      </div>{" "}
    </section>
  );
}
