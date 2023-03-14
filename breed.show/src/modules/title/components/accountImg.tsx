import React from "react";
import {ReactComponent as AccImgSvg} from '../../header/account.svg'

interface Props {
    className?: string;
};

function AccountImg({className}: Props) {
    return(
    <AccImgSvg className={className}/>
    );   
};

export default AccountImg;