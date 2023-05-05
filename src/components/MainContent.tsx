import MainContentCardRow from "./MainContentCardRow";
import MainContentHeader from "./MainContentHeader";
import MainContentPicks from "./MainContentPicks";
const ROW_CARD_QTY = 7;

const MainContent = () => {
  return (
    <div className="main w-[calc(100vw-440px)] flex gap-0 flex-wrap py-3 px-4 bg-[var(--foreground-color)] rounded-lg">
      <MainContentHeader />
      <div className="card-container overflow-auto w-full flex flex-col h-[calc(100%-80px)] gap-y-5">
        <MainContentPicks />
        <MainContentCardRow rowTitle="Your Shows" rowCardQty={ROW_CARD_QTY} />
        <MainContentCardRow rowTitle="Made for you" rowCardQty={ROW_CARD_QTY} />
        <MainContentCardRow
          rowTitle="Recently played"
          rowCardQty={ROW_CARD_QTY}
        />
        <MainContentCardRow
          rowTitle="Episodes for you"
          rowCardQty={ROW_CARD_QTY}
        />
      </div>
    </div>
  );
};
export default MainContent;
