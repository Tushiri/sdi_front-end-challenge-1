import Head from "next/head";
import NewsFeed from "@/app/NewsFeed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TMSPH News</title>
      </Head>
      <NewsFeed />
    </div>
  );
}
