const ButtonGroup = () => {
  return (
    <div className="flex justify-center bg-base-100 pt-5">
      <div className="btn-group">
        <input
          type="radio"
          name="options"
          data-title="Top Picks"
          className="btn p-4"
        />
        <input
          type="radio"
          name="options"
          data-title="เริ่มต้น 9 .-"
          className="btn p-4"
        />
        <input
          type="radio"
          name="options"
          data-title="Shopee Mall"
          className="btn p-4"
        />
        <input
          type="radio"
          name="options"
          data-title="Fashion & Beauty"
          className="btn p-4"
        />
        <input
          type="radio"
          name="options"
          data-title="Mom & Babies"
          className="btn p-4"
        />
        <input
          type="radio"
          name="options"
          data-title="Electronics"
          className="btn p-4"
        />
        <input
          type="radio"
          name="options"
          data-title="เพิ่มเติม"
          className="btn p-4"
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
