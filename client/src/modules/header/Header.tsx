import {ReactComponent as Logo} from './logo.svg';
import {ReactComponent as WordMark} from './wordmark.svg';
import Search from "../search/Search";
import Menu from "./components/Menu";

function Header() {
   
    return (
        <div className="Header">
            
            <Menu className="Header-Menu"/>
            <Logo className="Header-Logo"/>
            <WordMark className="Header-WordMark"/>
            
            <div className="Header-Search">
                <Search/>
            </div>
            <div className="Header-Login">
                <a className="Header-Login-Link" href="login.html">Войти</a>
            </div>
        
        </div>
    );
}

export default Header;