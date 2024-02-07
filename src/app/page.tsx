'use client'

import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Home() {
  // page loading...
  const [isLangLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        setPageLoaded(true);
      } catch (error) {
        console.error("Error fetching language:", error);
      }
    };
    if (!isLangLoaded) {
      fetchLanguage();
    }
  }, [isLangLoaded]);

  // setting
  const [password, setPassword] = useState({ value: '', strength: 0 });
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecialChars, setUseSpecialChars] = useState(true);

  // check password
  const checkPasswordStrength = () => {
    let currentScore = 0;
    let maxScore = 0;
  
    // パスワードの長さチェック
    if (password.value.length >= 12) {
      currentScore += 2;
    } else if (password.value.length >= 8) {
      currentScore += 1;
    }
    maxScore += 2; // パスワードの長さに関する最高得点
  
    // 大文字と小文字の組み合わせチェック
    if (useUppercase && /[A-Z]/.test(password.value) && /[a-z]/.test(password.value)) {
      currentScore += 2;
    } else if (useUppercase || /[A-Z]/.test(password.value) || /[a-z]/.test(password.value)) {
      currentScore += 1;
    }
    maxScore += 2; // 大文字と小文字の組み合わせに関する最高得点
  
    // 数字の含有チェック
    if (useNumbers && /\d/.test(password.value)) {
      currentScore += 2;
    } else if (useNumbers || /\d/.test(password.value)) {
      currentScore += 1;
    }
    maxScore += 2; // 数字の含有に関する最高得点
  
    // 特殊文字の使用チェック
    if (useSpecialChars && /[!@#$%^&*()_\-+=<>?/{}[\]]/.test(password.value)) {
      currentScore += 2;
    } else if (useSpecialChars || /[!@#$%^&*()_\-+=<>?/{}[\]]/.test(password.value)) {
      currentScore += 1;
    }
    maxScore += 2; // 特殊文字の使用に関する最高得点
  
    return `${currentScore}/${maxScore}`;
  };

  // generate password
  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}[]';
    let availableChars = lowercaseChars;

    const viewPassword = document.getElementById('viewPassword');
    if(viewPassword){
      viewPassword.classList.toggle(`animated-fade-in`);
    }

    // 大文字の組み合わせを有効にする場合
    if (useUppercase) {
      availableChars += uppercaseChars;
    }
    
    // 数字の含有を有効にする場合
    if (useNumbers) {
      availableChars += numberChars;
    }
    
    // 特殊文字の使用を有効にする場合
    if (useSpecialChars) {
      availableChars += specialChars;
    }

    // パスワード生成
    let generatedPassword = '';
    const safeLength = Math.min(length, 100); // 100文字までに制限する
    for (let i = 0; i < safeLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    // パスワードの強度を検査
    const strength = parseInt(checkPasswordStrength(), 10); // 文字列を数値に変換

    // 生成したパスワードと強度をセット
    setPassword({ value: generatedPassword, strength });

    fetch('https://script.google.com/macros/s/AKfycbx16iruLRHu7MuPhWZtXY0FBupPAakmfhvEPn6oLLwja1crLQ_4oq_uCeBZU_nWF-s4mw/exec?apikey=WHJfF9wXUnBz852wKjmidWoIMHd6vo1iqNHzwXqauZTrVLpbG1oOUb&sheet=vercel_generated&mode=addvalue&private_apikey=fDqOhM3o90iLKYM6zWcN&key=view&value=1')

    if(viewPassword){
      setTimeout(() => {
        viewPassword.classList.toggle(`animated-fade-in`);
      }, 1);
    }
  };

  // Text Copy
  const [copyStatus, setCopyStatus] = useState('Copy');
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password.value);
      setCopyStatus('Copied!');
      setTimeout(() => {
        setCopyStatus('Copy');
      }, 4000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  useEffect(() => {
    // 要素の読み込み時に実行したいロジックをここに記述する
    generatePassword();
  }, []); // generatePassword関数が変更されるたびに実行される

  //https://script.google.com/macros/s/AKfycbx16iruLRHu7MuPhWZtXY0FBupPAakmfhvEPn6oLLwja1crLQ_4oq_uCeBZU_nWF-s4mw/exec?apikey=WHJfF9wXUnBz852wKjmidWoIMHd6vo1iqNHzwXqauZTrVLpbG1oOUb&sheet=vercel_generated&mode=get&private_apikey=fDqOhM3o90iLKYM6zWcN

  const [valueData, setValueData] = useState<string[] | null>(null);
  const [isLoadGasID_hwAU812h, setIsLoadGasID_hwAU812h] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx16iruLRHu7MuPhWZtXY0FBupPAakmfhvEPn6oLLwja1crLQ_4oq_uCeBZU_nWF-s4mw/exec?apikey=WHJfF9wXUnBz852wKjmidWoIMHd6vo1iqNHzwXqauZTrVLpbG1oOUb&sheet=vercel_generated&mode=get&private_apikey=fDqOhM3o90iLKYM6zWcN');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const values: string[] = jsonData.map((item: { value: string }) => item.value);
        setValueData(values);
        setIsLoadGasID_hwAU812h(true); // ロード完了を示すフラグをセット
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <body>
      {isLangLoaded ? (
        <>
        <div className="w-full h-full">
          <Header comp_lang="en"/>
          <div className="animated-fade-in-[0.25s] flex justify-center items-center w-full h-full mt-10 mb-10 p-5">
            <div className="flex flex-col justify-center items-center w-full gap-5">
              <div className="animated-fade-in text-center">
                <h1 className="font-bold text-4xl">Online Password Generator</h1>
              </div>
              <div className="w-full h-full max-w-[1000px] flex flex-col justify-center items-center p-3 m-auto gap-5">
                <div className="animated-fade-in bg-zinc-500/20 relative w-full flex justify-center items-center rounded-full m-auto p-4 shadow-lg">
                  <div className="overflow-x-scroll whitespace-nowrap text-center">
                    <span id="viewPassword" className="animated-fade-in text-white font-bold">{password.value}</span>
                  </div>
                </div>
                <div className="block flex justify-center items-center gap-4">
                  <button onClick={handleCopyToClipboard} className="animated-slideIn-down button_blue_hover_particle"><FontAwesomeIcon icon={faCopy} className="mr-1"/>{copyStatus}</button>
                  <button onClick={generatePassword} className="animated-slideIn-down button_blue_hover_particle">Generate</button>
                </div>
              </div>
              {/* setting */}
              <section>
                <div className="flex justify-center items-center flex-col gap-3 p-4 rounded-lg select-none bg-gray-900/5">
                  <label className="animated-slideIn-up-[1.0s] flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-600">
                    <span>Length</span>
                    <input
                      type="number"
                      value={length}
                      max={100}
                      min={1}
                      onChange={(e) => setLength(parseInt(e.target.value))}
                      className="border text-sm rounded-lg block w-full p-2.5 shadow-lg bg-neutral-800 border-gray-600 placeholder-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </label>
                  <label className="animated-slideIn-up-[1.0s] checkbox_blue_ani_hAa13 flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-600">
                    <span>Uppercase</span>
                    <input
                      type="checkbox"
                      checked={useUppercase}
                      onChange={() => setUseUppercase(!useUppercase)}
                    />
                    <div className="checkbox_blue_ani_hAa13_checkmark"></div>
                  </label>
                  <label className="animated-slideIn-up-[1.0s] checkbox_blue_ani_hAa13 flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-600">
                    <span>Numbers</span>
                    <input
                      type="checkbox"
                      checked={useNumbers}
                      onChange={() => setUseNumbers(!useNumbers)}
                    />
                    <div className="checkbox_blue_ani_hAa13_checkmark absolute"></div>
                  </label>
                  <label className="animated-slideIn-up-[1.0s] checkbox_blue_ani_hAa13 flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-600">
                    <span>Special Characters</span>
                    <input
                      type="checkbox"
                      checked={useSpecialChars}
                      onChange={() => setUseSpecialChars(!useSpecialChars)}
                    />
                    <div className="checkbox_blue_ani_hAa13_checkmark"></div>
                  </label>
                  <div className="animated-slideIn-up-[1.0s] flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-600">
                    <strong>Password Score:</strong> {checkPasswordStrength()}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="w-full mt-5 mb-5 p-6">
            <div className="w-full border-[2px] border-zinc-600 rounded-lg p-4">
              <div className="mx-auto w-full max-w-[1240px] undefined">
                <div className="flex flex-col items-center w-full m-auto gap-4">
                  <h1 className="text-center font-bold">Password Creation Tally</h1>
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center w-full">
                    <div className="bg-none text-white text-3xl p-3 min-w-[100px] text-center items-center rounded-full w-full overflow-scroll">
                      {isLoadGasID_hwAU812h ? (
                        <>
                          {valueData?.map((value: string, index: number) => (
                            <p className="animated-fade-in font-medium select-none" key={index}>{value}</p>
                          ))}
                        </>
                      ) : (
                        <>
                        <div className="animate-spin h-10 w-10 border-4 border-zinc-500 rounded-full border-t-transparent m-auto"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer comp_lang="en"/>
        </div>
        </>
      ) : (
        <div className="fixed flex justify-center items-center w-full h-full" aria-label="loading">
          <div className="animate-spin h-10 w-10 border-4 border-zinc-500 rounded-full border-t-transparent"></div>
        </div>
      )}
    </body>
  );
}
