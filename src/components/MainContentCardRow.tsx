type CardRowType = {
  rowTitle: string;
  rowCardQty: number;
};

const MainContentCardRow = ({ rowTitle, rowCardQty }: CardRowType) => {
  return (
    <div className="your-shows flex flex-col gap-y-5">
      <div className="card-row-header flex items-center w-full">
        <h1 className="text-xl  font-semibold truncate flex-1 hover:underline hover:cursor-pointer decoration-3">
          {rowTitle}
        </h1>
        <span className="show-all-btn flex flex-1 justify-end opacity-50 hover:cursor-pointer hover:underline decoration-2 text-sm font-semibold mr-1">
          Show All
        </span>
      </div>
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
