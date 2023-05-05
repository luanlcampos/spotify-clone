import MainContent from "@/components/MainContent";
import NavBar from "@/components/NavBar";
import Player from "@/components/Player";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Clone - Casion</title>
      </Head>
      <div className="grid-container h-full max-h-screen gap-x-4 pt-2">
        <NavBar />
        <MainContent />
        <div className="footer">
          <Player />
        </div>
      </div>
    </>
  );
}
