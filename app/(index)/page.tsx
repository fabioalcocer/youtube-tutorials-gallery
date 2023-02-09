import { Inter } from "@next/font/google";
import Form from "./components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen bg-[#232946]`}>
      <div className="container mx-auto max-w-5xl p-8">
        <div className="header mt-16 block grid-cols-2 items-center gap-10 md:grid">
          <div>
            <h1 className="headline mb-5 text-6xl font-bold leading-[1.15] text-zinc-100">
              My YouTube Resource Gallery
            </h1>
            <p className="text-xl leading-8 text-[#c6cdf3] mb-8">
              The perfect app to keep track of valuable resources while learning
              to code. As you come across a helpful video, add the id here.
            </p>
          </div>
          <Form />
        </div>
        <ul id="videosContainer"></ul>
      </div>
      {/* <VideoModal /> */}
    </main>
  );
}
