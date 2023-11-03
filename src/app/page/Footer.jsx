import Image from "next/image";

// react-icons
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-100 text-base-content">
        <nav>
          <header className="footer-title">ศูนย์ช่วยเหลือ</header>
          <a className="link link-hover">Help Centre</a>
          <a className="link link-hover">สั่งซื้อสินค้าอย่างไร</a>
          <a className="link link-hover">เริ่มขายสินค้าอย่างไร</a>
          <a className="link link-hover">ช่องทางการชำระเงินใน Shopee</a>
          <a className="link link-hover">Shopee Coins</a>
          <a className="link link-hover">การจัดส่งสินค้า</a>
          <a className="link link-hover">การคืนเงินและคืนสินค้า</a>
          <a className="link link-hover">การันตีโดย Shopee คืออะไร?</a>
          <a className="link link-hover">ติดต่อ Shopee</a>
        </nav>
        <nav>
          <header className="footer-title">เกี่ยวกับ SHOPEE</header>
          <a className="link link-hover">เกี่ยวกับเรา</a>
          <a className="link link-hover">โปรแกรม Affiliate</a>
          <a className="link link-hover">ร่วมงานกับเรา</a>
          <a className="link link-hover">นโยบายของ Shopee</a>
          <a className="link link-hover">นโยบายความเป็นส่วนตัว</a>
          <a className="link link-hover">Shopee Blog</a>
          <a className="link link-hover">Shopee Mall</a>
          <a className="link link-hover">Seller Centre</a>
          <a className="link link-hover">Flash Deals</a>
          <a className="link link-hover">ผู้ติดต่อออนไลน์</a>
        </nav>
        <nav>
          <header className="footer-title">วิธีการชำระเงิน</header>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/9263fa8c83628f5deff55e2a90758b06.png"
                width={50}
                height={50}
                alt="shopee pay"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/thaipanit.png"
                width={50}
                height={50}
                alt="thaipanit"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              <Image
                src="/img/kasikorn.png"
                width={50}
                height={50}
                alt="kasikorn"
              />
            </a>
          </div>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/kungsri.png"
                width={50}
                height={50}
                alt="kungsri"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/90d3cf6f82d3a1a74c84ab5f876583cb.png"
                width={50}
                height={50}
                alt="kunginw"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              <Image
                src="/img/6e7e289bab75472a86d03bb11e2c9baa.png"
                width={50}
                height={50}
                alt="kungthai"
              />
            </a>
          </div>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image src="/img/KTC.png" width={50} height={50} alt="KTC" />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/VISA.png"
                width={50}
                height={50}
                alt="VISA"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              <Image
                src="/img/Matercard.png"
                width={50}
                height={50}
                alt="Matercard"
              />
            </a>
          </div>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image src="/img/JCB.png" width={50} height={50} alt="JCB" />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/th-50009109-610807e056e0e5d16f8b063d89ff4a22.png"
                width={50}
                height={50}
                alt="#"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              <Image
                src="/img/ketmoney.png"
                width={50}
                height={50}
                alt="ketmoney"
              />
            </a>
          </div>
          <header className="footer-title mt-5">บริการจัดส่ง</header>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image src="/img/SPX.png" width={50} height={50} alt="SPX" />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/Ninja.png"
                width={50}
                height={50}
                alt="Ninja"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              <Image src="/img/BEST.png" width={50} height={50} alt="BEST" />
            </a>
          </div>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image src="/img/J&T.png" width={50} height={50} alt="J&T" />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image src="/img/DHL.png" width={50} height={50} alt="DHL" />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              <Image src="/img/KERRY.png" width={50} height={50} alt="KERRY" />
            </a>
          </div>
          <div className="flex flex-row-3 gap-x-3">
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/Paisani.png"
                width={50}
                height={50}
                alt="Paisani"
              />{" "}
            </a>
            <a className="link link-hover bg-base-100 shadow-md p-1">
              {" "}
              <Image
                src="/img/Flash.png"
                width={50}
                height={50}
                alt="Flash"
              />{" "}
            </a>
          </div>
        </nav>
        <nav>
          <header className="footer-title">ติดตามเรา</header>
          <a className="link link-hover flex gap-2">
            <BsFacebook size={20} />
            Facebook
          </a>
          <a className="link link-hover flex gap-2">
            <BiLogoInstagramAlt size={20} />
            Instagram
          </a>
          <a className="link link-hover flex gap-2">
            <FaLine size={20} />
            Line
          </a>
          <a className="link link-hover flex gap-2">
            <BsLinkedin size={20} />
            LinkedIn
          </a>
        </nav>
        <nav>
          <header className="footer-title">ดาวน์โหลดแอปพลิเคชั่น</header>
          <div className="flex flex-row-2 gap-3">
            <div className="bg-base-100 shadow-md p-1">
              <a className="link link-hover">
                <Image src="/img/QR.png" width={100} height={100} alt="QR" />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a className="link link-hover bg-base-100 shadow-md p-1">
                <Image
                  src="/img/App-store.png"
                  height={70}
                  width={70}
                  alt="App-store"
                />
              </a>
              <a className="link link-hover bg-base-100 shadow-md p-1">
                <Image
                  src="/img/Google-play.png"
                  height={70}
                  width={70}
                  alt="App-store"
                />
              </a>
              <a className="link link-hover bg-base-100 shadow-md p-1">
                <Image
                  src="/img/AppGallery.png"
                  height={70}
                  width={70}
                  alt="App-store"
                />
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>© 2023 Shopee. All Rights Reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>
              Country & Region: สิงคโปร์ | อินโดนีเซีย | ไต้หวัน | ไทย |
              มาเลเซีย | เวียดนาม | ฟิลิปปินส์ | บราซิล | เม็กซิโก | โคลัมเบีย |
              ชิลี
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
