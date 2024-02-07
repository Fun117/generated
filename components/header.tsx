import React, { useState, useEffect } from 'react';
//import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "flag-icons/css/flag-icons.min.css";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { en_config } from '../public/data/config/en_config';
import { links_config } from '../public/data/config/links_config';

interface HeaderProps {
    comp_lang: string;
}

export default function Header({ comp_lang }: HeaderProps) {
    const [language, setLanguage] = useState(comp_lang);

    // ==== 設定 ====
    const header_scroll_block_y = 400;
    // ==============

    // 言語によって描画するコンポーネントを切り替える
    //var locales = language === 'en' ? en_config : ja_config;
    var locales = en_config;
    var links = links_config;
    var lang = language === 'en' ? 'English' : '日本語';
    var flag = language === 'en' ? 'fi fi-us' : 'fi fi-jp';


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                header_scroll_block_check();
            });
        }
    }, []);

    const header_scroll_block_check = () => {
        const header_element = document.getElementById('header');
        if (header_element) {
            const y = window.scrollY;
            if (y <= 80) {
                header_element.classList.remove(`animated-slideOut-up-[opacity-0]`);
                header_element.classList.add(`relative`);
                header_element.classList.remove(`fixed`);
            } else {
                if (y >= header_scroll_block_y) {
                    header_element.classList.add(`fixed`);
                    header_element.classList.remove(`animated-slideOut-up-[opacity-0]`);
                    header_element.classList.add(`animated-slideIn-down`);
                    header_element.classList.remove(`relative`);
                } else {
                    if (header_element.className.search(`animated-slideIn-down`)) {
                        header_element.classList.add(`animated-slideOut-up-[opacity-0]`);
                        header_element.classList.remove(`animated-slideIn-down`);
                    }
                }
            }
        }
    };

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ja' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);

        const winPath = window.location.pathname;
        const newPath = winPath.slice(3);
        window.location.href = `/${newLanguage}/${newPath}`;
    };

    return (
        <div id='header' onLoad={header_scroll_block_check} className="relative w-full h-20 border-b border-solid flex items-center justify-center z-50 top-0 border-zinc-700 bg-gray-950 select-none" style={{backgroundColor:'rgb(21 22 33)'}}>
            <div className="mx-5 w-full max-w-screen-lg flex items-center justify-between">
                <div className="flex items-center justify-start gap-x-10">
                    <a className="active select-none" href={links.site_home} target="_self" aria-current="page">
                        <div className="flex items-center justify-content relative">
                            <img width={40} src={links['imgUrl_brand_melinks_Icon512x512@bgNone_TypePng']} className='pointer-events-none'/>
                            <h1 className="text-2xl ml-1 text-white hover:text-slate-50/70 transition duration-500 ease"><strong>{locales.Generated}</strong></h1>
                        </div>
                    </a>
                    <div className="hidden md:block">
                        <ul className="flex gap-4">
                            <li>
                                <a href={`${links.site_home}`}>
                                    <button className='text-white hover:text-slate-50/70 transition duration-500 ease'>{locales.ホーム}</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5">
                    {/*<SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <button className='animation_text_hover_color'>
                                <FontAwesomeIcon icon={faCircleUser} className='h-[100px]' />
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <div className="hidden md:block">
                        <div className="flex gap-5 justify-end items-center">
                            <button className='button_blue_1' onClick={toggleLanguage}>
                                <span className={flag}></span>
                                {lang}
                            </button>
                        </div>
                    </div>*/}
                    <div className="block md:hidden">
                        <div className="flex gap-5 justify-end items-center">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline"><FontAwesomeIcon icon={faBars} /></Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>{locales.Generated}</SheetTitle>
                                        <SheetDescription>
                                            {locales.metadata_description}
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid items-center gap-4">
                                            <a href={`${links.site_home}`} className='button_border_1'>
                                            {locales.ホーム}
                                            </a>
                                        </div>
                                    </div>
                                    {/*
                                    <div className="grid gap-4 py-4">
                                        <div className="grid items-center gap-4">
                                            <button className='button_blue_1' onClick={toggleLanguage}>
                                                <span className={flag}></span>
                                                {lang}
                                            </button>
                                        </div>
                                    </div>
                                    */}
                                    <SheetFooter>
                                        <SheetClose className='grid'>
                                            <Button>{locales.閉じる}</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
