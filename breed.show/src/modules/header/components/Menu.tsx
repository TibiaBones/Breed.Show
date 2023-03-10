//?????????????????
import React from 'react'
//?????????????????
import {ReactComponent as MenuSvg} from "./menu.svg";

interface Props {
    className?: string;
};

function Menu({className}: Props) {
    
    const showMenu = () => {
        alert("show menu")
    };
    
    return (
        <MenuSvg className={className} onClick={showMenu}/>
    );
};

export default Menu;
