'use client'

import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Home() {
  // page loading...
  const [isLangLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        setPageLoaded(true);
        generatePassword();
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

    const viewPassword = document.getElementById('viewPassword');
    if(viewPassword){
      viewPassword.classList.toggle(`animated-fade-in`);
    }
  
    let availableChars = lowercaseChars;
  
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
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }
  
    // パスワードの強度を検査
    const strength = parseInt(checkPasswordStrength(), 10); // 文字列を数値に変換
  
    // 生成したパスワードと強度をセット
    setPassword({ value: generatedPassword, strength });

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

  return (
    <body>
      {isLangLoaded ? (
        <>
        <div className="animated-fade-in-[0.25s] m-auto mt-10 mb-10 p-5">
          <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <div className="animated-fade-in text-center">
              <h1 className="font-bold text-4xl">Online Password Generator</h1>
            </div>
            <div className="w-full h-full max-w-[1000px] flex flex-col justify-center items-center p-3 m-auto gap-5">
              <div className="animated-fade-in bg-zinc-500/20 relative w-full flex justify-center items-center rounded-full m-auto p-4 shadow-lg">
                <div className="overflow-x-scroll whitespace-nowrap text-center">
                  <span id="viewPassword" className="animated-fade-in text-white font-bold">{password.value}</span>
                </div>
                <button onClick={handleCopyToClipboard} className="animated-fade-in-[1.0s] bg-zinc-600 hover:bg-zinc-400/20 active:bg-zinc-900/20 active:scale-[50%] hidden sm:block absolute right-0 rounded-lg m-auto mr-5 p-2 shadow-lg select-none transition duration-500 ease"><FontAwesomeIcon icon={faCopy} className="mr-1"/>{copyStatus}</button>
              </div>
              <div className="block sm:hidden flex justify-center items-center gap-4">
                <button onClick={handleCopyToClipboard} className="animated-slideIn-down bg-zinc-600 hover:bg-zinc-400/20 active:bg-zinc-900/20 active:scale-[50%] rounded-md p-2 shadow-lg select-none transition duration-500 ease"><FontAwesomeIcon icon={faCopy} className="mr-1"/>{copyStatus}</button>
                <button onClick={generatePassword} className="animated-slideIn-down bg-zinc-600 hover:bg-zinc-400/20 active:bg-zinc-900/20 active:scale-[50%] rounded-lg m-auto p-2 shadow-lg select-none transition duration-500 ease">Generate</button>
              </div>
              <button onClick={generatePassword} className="animated-slideIn-down bg-zinc-600 hover:bg-zinc-400/20 active:bg-zinc-900/20 active:scale-[80%] hidden sm:block rounded-lg m-auto p-2 shadow-lg select-none transition duration-500 ease">Generate</button>
            </div>
            {/* setting */}
            <section>
              <div className="flex justify-center items-center flex-col gap-3 p-4 rounded-lg select-none bg-zinc-950/20">
                <label className="animated-slideIn-up-[1.0s] flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-700/50">
                  <span>Length</span>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                    className="border text-sm rounded-lg block w-full p-2.5 shadow-lg bg-zinc-800/50 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </label>
                <label className="animated-slideIn-up-[1.0s] checkbox_blue_ani_hAa13 flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-700/50">
                  <span>Uppercase</span>
                  <input
                    type="checkbox"
                    checked={useUppercase}
                    onChange={() => setUseUppercase(!useUppercase)}
                  />
                  <div className="checkbox_blue_ani_hAa13_checkmark"></div>
                </label>
                <label className="animated-slideIn-up-[1.0s] checkbox_blue_ani_hAa13 flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-700/50">
                  <span>Numbers</span>
                  <input
                    type="checkbox"
                    checked={useNumbers}
                    onChange={() => setUseNumbers(!useNumbers)}
                  />
                  <div className="checkbox_blue_ani_hAa13_checkmark absolute"></div>
                </label>
                <label className="animated-slideIn-up-[1.0s] checkbox_blue_ani_hAa13 flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-700/50">
                  <span>Special Characters</span>
                  <input
                    type="checkbox"
                    checked={useSpecialChars}
                    onChange={() => setUseSpecialChars(!useSpecialChars)}
                  />
                  <div className="checkbox_blue_ani_hAa13_checkmark"></div>
                </label>
                <div className="animated-slideIn-up-[1.0s] flex flex-row justify-between items-center w-full gap-4 text-[1.5rem] p-3 rounded-lg border-2 border-zinc-700/50">
                  <strong>Password Score:</strong> {checkPasswordStrength()}
                </div>
              </div>
            </section>
          </div>
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
