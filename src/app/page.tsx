'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const [isLangLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const fetchLanguage = async () => {
        try {
          setPageLoaded(true);
        } catch (error) {
            console.error("Error fetching language:", error);
        }
    };

    // 言語情報をまだ取得していない場合にのみ非同期で取得する
    if (!isLangLoaded) {
        fetchLanguage();
    }
  }, [isLangLoaded]);

  return (
    <body>
      {isLangLoaded ? (
        <>
          <div className="fixed flex flex-col justify-center items-center w-full h-full gap-4 p-5" style={{background: `linear-gradient(to top, rgba(217, 175, 217, 0.7) 0%, rgba(151, 217, 225, 0.7) 100%)`}}>
            <div className=" flex flex-col gap-4 items-center text-center">
              <h1 className=" text-white font-bold text-7xl">COMING SOON</h1>
              <p className="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">This website is scheduled to be released soon.</p>
            </div>
            <div>
              <a href="https://github.com/fun117" target="_block">
                <button className="border border-white/[0.64] text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:text-white hover:bg-teal-600 focus:outline-none focus:shadow-outline">Developer</button>
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="fixed flex justify-center items-center w-full h-full" aria-label="loading" style={{background: `linear-gradient(to top, rgba(217, 175, 217, 0.7) 0%, rgba(151, 217, 225, 0.7) 100%)`}}>
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
    </body>
  );
}
