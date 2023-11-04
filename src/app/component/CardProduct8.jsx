import Image from "next/image";

const CardProduct8 = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/img/Polaroid.jpg"
          width={400}
          height={400}
          alt="Polaroid"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Polaroid!</h2>
        <p>If a dog chews shoes whose Polaroid does he choose?</p>
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
  );
};

export default CardProduct8;
