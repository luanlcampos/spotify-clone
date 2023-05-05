type CardRowType = {
  rowTitle: string;
  rowCardQty: number;
};

const MainContentCardRow = ({ rowTitle, rowCardQty }: CardRowType) => {
  return (
    <div className="your-shows flex flex-col gap-y-5">
      <h1 className="text-xl  font-semibold">{rowTitle}</h1>
      <div className={`cards grid grid-cols-7 grid-rows-1 gap-x-3`}>
        {[...Array(rowCardQty)].map((e, i) => {
          return (
            <div
              key={i}
              className="card bg-[#181818] px-3 py-2 flex flex-col gap-y-3 hover:bg-[#282828] hover:cursor-pointer"
            >
              <div className="image">
                <img
                  src={`http://via.placeholder.com/184x184?text=${i}`}
                  alt=""
                />
              </div>
              <div className="desc">
                <div className="title font-bold text-sm mb-3">NerdCast {i}</div>
                <div className="author text-sm opacity-50">Jovem Nerd</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContentCardRow;
