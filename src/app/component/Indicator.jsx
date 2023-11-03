import Image from "next/image";

import { AiOutlineClockCircle, AiOutlineLine } from "react-icons/ai";

const Indicator = () => {
  return (
    <nav className="w-full h-[50px] flex justify-center bg-base-100 sm:w-full p-3">
      <div className="flex gap-3">
        <AiOutlineLine size={20} />
        <Image
          src="/img/FlashSale.png"
          height={100}
          width={100}
          alt="FlashSale"
        />
        <AiOutlineClockCircle size={20} />
        <p>จบใน</p>
        <span className="countdown font-mono text-2xl text-white gap-3">
          <span style={{ "--value": 10 }} className="bg-black"></span>
          <span style={{ "--value": 24 }} className="bg-black"></span>
          <span style={{ "--value": 14 }} className="bg-black"></span>
        </span>
        <AiOutlineLine size={20} />
      </div>
    </nav>
  );
};

export default Indicator;
