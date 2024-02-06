'use client'

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import "flag-icons/css/flag-icons.min.css";
import { links_config } from '../public/data/config/links_config';
import { en_config } from '../public/data/config/en_config';

interface HeaderProps {
    comp_lang: string;
}
export default function Footer({ comp_lang }: HeaderProps) {

    const currentYear = new Date().getFullYear();
    const [language, setLanguage] = useState(comp_lang);

    // 言語によって描画するコンポーネントを切り替える
    //var locales = language === 'en' ? en_config : ja_config;
    var locales = en_config;
    var links = links_config;
    var lang = language === 'en' ? 'EN' : 'JA';
    var flag = language === 'en' ? 'fi fi-us' : 'fi fi-jp';

    return (
        <div className="border-t border-[#FFFFFF]/[0.16] pt-20 pb-10 px-[16px] overflow-hidden z-50 select-none" style={{backgroundColor:'rgb(39 41 55)'}}>
            <div className="flex md:flex-row flex-col w-full max-w-7xl mx-auto justify-between relative">
                <div className="lg:w-[50%] flex flex-col justify-between ">
                    <div>
                        <a className="flex items-center space-x-2 flex-shrink-0 z-50 select-none" href={`${links.site_home}`}>
                            <img alt="Melinks" loading="lazy" width={10}  height={10} decoding="async" data-nimg={1} className="transition duration-300 transform blur-0 scale-100 h-5 w-5 pointer-events-none"
                                src={links_config['imgUrl_brand_melinks_Icon512x512@bgNone_TypePng']}
                            />
                            <span className="text-lg text-white font-bold hover:text-slate-50/70 transition duration-500 ease">
                            {locales.Generated}
                            </span>
                        </a>
                        <p className="text-[#FFFFFF]/[0.64] text-sm mt-2 max-w-sm font-normal">
                        {locales.metadata_description}
                        </p>
                    </div>
                    <div>
                        <p className="text-white text-sm mt-2 max-w-sm font-normal hover:text-slate-50/70 transition duration-500 ease">
                            @Fun117
                        </p>
                        <div className="flex space-x-2">
                            <a href={links.fun117_github_link} target="_blank"  rel="noopener noreferrer" className="font-normal mt-4 text-white flex space-x-2 items-center hover:text-slate-50/70 transition duration-500 ease">
                                <FontAwesomeIcon icon={faGithub} className='animation_text_hover_color'/>
                            </a>
                            <a href={links.fun117_youtube_link} target="_blank"  rel="noopener noreferrer" className="font-normal mt-4 text-white flex space-x-2 items-center hover:text-slate-50/70 transition duration-500 ease">
                                <FontAwesomeIcon icon={faYoutube} className='animation_text_hover_color'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2  md:flex">
                    <div className="flex flex-col text-sm md:px-4 mb-4">
                        <a href={`${links.site_home}`} rel="noopener noreferrer" className="text-white hover:text-slate-50/70 transition duration-500 ease">
                        {locales.ホーム}
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-20 pb-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#989AA6]/[0.5] to-transparent" />
                <div className="text-sm pt-4 text-center text-white/[0.64] flex items-center flex-wrap justify-center">
                    <p className='select-none text-slate-600'>
                        Copyright &copy; 2024 - {currentYear} 
                        <a href={links.fun117_github_link} target="_blank" className='ml-1 hover:text-slate-50/20 transition duration-500 ease'>
                            Fun117
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
