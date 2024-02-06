import React, { useEffect } from 'react';

export const FadeUpTrigger = () => {
    useEffect(() => {
        const fadeAnime = () => {
            document.querySelectorAll('.fadeUpTrigger').forEach(function (element) {
                const elemPos = (element as HTMLElement).offsetTop + 200;
                const scroll = window.scrollY || window.pageYOffset;
                const windowHeight = window.innerHeight;
        
                if (scroll >= elemPos - windowHeight) {
                    (element as HTMLElement).classList.add('fadeUpAni');
                }else{
                    (element as HTMLElement).classList.remove('fadeUpAni');
                }
            });
        };
    
        // 画面をスクロールをしたら動かしたい場合の記述
        window.addEventListener('scroll', fadeAnime);
    
        // 画面が読み込まれたらすぐに動かしたい場合の記述
        window.addEventListener('load', fadeAnime);
    
        return () => {
          // Cleanup the event listeners when the component unmounts
            window.removeEventListener('scroll', fadeAnime);
            window.removeEventListener('load', fadeAnime);
        };
    }, []);
}