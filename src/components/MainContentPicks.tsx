const MainContentPicks = () => {
  return (
    <div className="picks-container w-full pr-3">
      <h1 className="text-3xl font-semibold mb-3">Good Afternoon</h1>
      <div className="picks w-full grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-y-3 gap-x-5 ">
        {[...Array(6)].map((e, i) => {
          return (
            <div
              className="pick-card flex items-center h-16 lg:h-20 bg-white bg-opacity-30 rounded-sm gap-x-3 hover:cursor-pointer hover:bg-opacity-40 font-semibold"
              key={i}
            >
              <img
                src={`http://via.placeholder.com/50x50`}
                alt="img"
                className="rounded-l-sm h-full "
              />
              <span>Lorem Ipsum</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContentPicks;
