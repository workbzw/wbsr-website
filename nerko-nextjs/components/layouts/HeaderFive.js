import Link from 'next/link';
import Logo from '../common/Logo';
import {useEffect} from 'react';
import MobileMenu from './MobileMenu';
import {useTranslation} from "react-i18next";

const HeaderFive = ({headerSetting = {}}) => {
    const handleLanguageClick = () => {
        if (i18n.language === 'zh') {
            localStorage.setItem('language','en');
            i18n.changeLanguage('en');
        } else {
            localStorage.setItem('language','zh');
            i18n.changeLanguage('zh');
        }
    }
    const {t, i18n} = useTranslation();
    const language = localStorage.getItem('language');
    console.log('language:' + language);
    if (language === null) {
        localStorage.setItem('language', 'en');
    }
    if (language !== i18n.language) {
        if (language === 'zh') {
            i18n.changeLanguage('zh');
        } else if (language === 'en') {
            i18n.changeLanguage('en');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.uni-header-navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('uk-sticky-fixed') : header.classList.remove('uk-sticky-fixed');
    };

    return (
        <>
            <MobileMenu/>
            <header className="uni-header uk-position-top">
                <div className="uni-header-navbar"
                     data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top">
                    <div className="uk-container">
                        <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                            <div className="uk-navbar-top">
                                <div className="uk-navbar-left uk-flex-1@m">
                                    <Link className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="/">
                                        <Logo/>
                                    </Link>
                                </div>

                                <div className="uk-navbar-center">
                                    <ul className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m"
                                        data-uk-scrollspy-nav="closest: li; scroll: true; offset: 40"
                                        data-uk-navbar-bound>
                                        <li><a href="#uni_about">{t('about')}</a></li>
                                        <li><a href="#uni_roadmap">{t('roadmap')}</a></li>
                                        <li><a href="#uni_team">{t('team')}</a></li>
                                        <li><a href="#uni_collection">{t('collection')}</a></li>
                                    </ul>
                                </div>

                                <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                                    <div className="uk-navbar-item uk-visible@m">
                                        <ul className="uk-subnav uk-subnav-small">
                                            <li>
                                                <a href="https://twitter.com/unistudioco"><i
                                                    className="uk-icon uk-icon-medium unicon-logo-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://discord.com/unistudioco"><i
                                                    className="uk-icon uk-icon-medium unicon-logo-discord"></i></a>
                                            </li>

                                        </ul>
                                    </div>
                                    <text onClick={handleLanguageClick}><i
                                        className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m">{t('language')}</i>
                                    </text>

                                    <div className="uk-navbar-item uk-hidden@m">
                                        <a href="#uni_mobile_menu" data-uk-toggle="">
                                            <i className="uk-icon uk-icon-medium unicon-menu"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
export default HeaderFive;