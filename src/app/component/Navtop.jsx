import {
  AiOutlineMinus,
  AiFillInstagram,
  AiFillBell,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { SiLine } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { BsFacebook, BsGlobe } from "react-icons/bs";

const Navtop = () => {
  return (
    <nav className="w-full h-[2.125rem] flex justify-between bg-[#F6422E] sm:w-full">
      {/* box-out > img,h2-left */}
      <div className="flex gap-1 mr-11">
        <div className="flex gap-1 items-center p-1">
          <a className="text-white text-sm">Seller Centre</a>
          <AiOutlineMinus
            size={20}
            color="white"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex gap-1 items-center p-1">
          <a className="text-white text-sm ">เริ่มต้นขายสินค้า</a>
          <AiOutlineMinus
            size={20}
            color="white"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex gap-1 items-center p-1">
          <a className="text-white text-sm ">ดาวน์โหลด</a>
          <AiOutlineMinus
            size={20}
            color="white"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div className="flex gap-2 items-center p-1">
          <a className="text-white text-sm ">ติดตามเราบน</a>
          <div className="flex gap-2">
            <BsFacebook size={20} color="white" />
            <AiFillInstagram size={20} color="white" />
            <SiLine size={20} color="white" />
          </div>
        </div>
      </div>
      {/* box-in > icons*/}
      <div className="flex justify-end gap-x-2 ml-11">
        <div className="flex gap-1 items-center p-1">
          <AiFillBell size={20} color="white" />
          <a className="text-white text-sm">การแจ้งเตือน</a>
        </div>
        <div className="flex gap-1 items-center p-1">
          <AiFillQuestionCircle size={20} color="white" />
          <a className="text-white text-sm">ช่วยเหลือ</a>
        </div>
        <div className="flex gap-2 items-center p-1">
          <BsGlobe size={20} color="white" />
          <a className="text-white text-sm">ไทย</a>
          <IoIosArrowDown size={20} color="white" />
        </div>
        <div className="flex gap-2 items-center p-1">
          <a className="text-white text-sm">สมัครใหม่</a>
          <AiOutlineMinus
            size={20}
            color="white"
            style={{ transform: "rotate(90deg)" }}
          />
          <a className="text-white text-sm">เข้าสู่ระบบ</a>
        </div>
      </div>
    </nav>
  );
};

export default Navtop;
