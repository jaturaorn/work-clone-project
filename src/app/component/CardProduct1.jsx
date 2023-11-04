import Image from "next/image";
import CardProduct4 from "./CardProduct4";
import CardProduct5 from "./CardProduct5";

const CardProduct1 = () => {
  return (
    <div className="flex justify-center flex-row-3 gap-3 my-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src="/img/Watch.jpg" width={400} height={400} alt="Watch" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch!</h2>
          <p>If a dog chews shoes whose Watch does he choose?</p>
          <div className="flex">
            <p className="text-lg text-[#F6422E] pt-3">
              ฿<span>559</span>
            </p>
          </div>
          <div className="card-actions justify-between">
            <progress
              className="progress progress-error w-56 mt-7"
              value="10"
              max="100"
            ></progress>
            <button className="btn btn-error text-white">ซื้อเลย</button>
          </div>
        </div>
      </div>
      <CardProduct4 />
      <CardProduct5 />
    </div>
  );
};

export default CardProduct1;
