import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="hero h-[300px] bg-base-100">
        <div className="hero-content text-center">
          <div className="flex flex-col justify-center w-full">
            <Image
              src="/img/th-11134004-7r98v-lnmurv0a8gmo81.jpg"
              width={1125}
              height={1125}
              alt="#"
            />
            <div className="flex w-full">
              <div className="w-1/4 bg-[#F6422E] shadow-md text-white p-2">
                <p className="text-xl font-semibold">12:00</p>
                กำลังดำเนินอยู่
              </div>
              <div className="w-1/4 bg-[#414142] shadow-md text-white p-2">
                <p className="text-xl font-semibold">18:00</p>
                เร็วๆนี้
              </div>
              <div className="w-1/4 bg-[#414142] shadow-md text-white p-2">
                <p className="text-xl font-semibold">21:00</p>
                เร็วๆนี้
              </div>
              <div className="w-1/4 bg-[#414142] shadow-md text-white p-2">
                <p className="text-xl font-semibold">00:00</p>
                เร็วๆนี้
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
