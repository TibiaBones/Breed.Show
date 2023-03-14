// import logo from './logo.svg';
import React from 'react';
import '../profileStyle.css';
import Menu from './components/Menu';
import Logo from './components/Logo';
import Wordmark from './components/wordmsrk';
import SearchField from './components/search/searchField';

function Header() {

    return (
        <div className="header-background">

            <div className="header-box_widthFlex">
                <div className="header-menuLogoWordmark">
                    <div className="header-flexBox dFlexJCCenterAICenter">
                        <Menu className='menu_img'/>
                    </div>

                    <div className="dFlexJCCenterAICenter">
                        <Logo className='logo_img'/>

                        <Wordmark className="wordmark_img" />
                    </div>
                </div>

                <SearchField/>

                <a className="header-buttonLogin" href="login.html">Войти</a>

                {/* <div className="header-flexBox displayNone">
                    <span className="account_name">Евгений Федоров</span>

                    <svg className="account_img">
                        <use href="#account" />
                    </svg>
                </div> */}
                {/* запилить компонент для свг-шки аккаунта!!!! */}
            </div>

            <div className="delimiter header-delimiter_width"></div>
        </div>
    );
};

export default Header;