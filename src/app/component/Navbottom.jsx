import Image from "next/image";

import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMinus,
} from "react-icons/ai";

const Navbottom = () => {
  return (
    <div className="navbar bg-[#F6422E]">
      <div className="navbar-start">
        <Image
          src="/img/shopee-logo-1068x561.png"
          width={115}
          height={115}
          alt="LOGO"
          className="shadow-2xl rounded-xl shadow-[#F6422E]"
        />
      </div>
      <div className="navbar-center">
        <div className="form-control flex flex-col">
          <div className="input-group">
            <input
              type="text"
              placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด"
              className="input input-bordered w-[890px]"
            />
            <button className="btn btn-square bg-[#F6422E] rounded-r-lg">
              <AiOutlineSearch size={22} color="white" />
            </button>
          </div>
          <div className="flex gap-x-2 mt-1">
            <a href="#" className="text-white text-sm">
              ไอโฟน 1 บาท
            </a>
            <a href="#" className="text-white text-sm">
              ไอโฟนมือ 2
            </a>
            <a href="#" className="text-white text-sm">
              เสื้อ 1 บาท
            </a>
            <a href="#" className="text-white text-sm">
              ลูกค้าใหม่
            </a>
            <a href="#" className="text-white text-sm">
              สินค้า 1 บาท
            </a>
            <a href="#" className="text-white text-sm">
              ลูกค้าใหม่
            </a>
            <a href="#" className="text-white text-sm">
              เครื่องใช้ไฟฟ้า
            </a>
            <a href="#" className="text-white text-sm">
              โทรศัพท์ 1 บาท
            </a>
            <a href="#" className="text-white text-sm">
              ของ 1 บาท
            </a>
            <a href="#" className="text-white text-sm">
              ลูกค้าใหม่
            </a>
            <a href="#" className="text-white text-sm">
              1 บาทสำหรับลูกค้าใหม่
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <AiOutlineShoppingCart size={30} color="white" />
      </div>
    </div>
  );
};

export default Navbottom;
