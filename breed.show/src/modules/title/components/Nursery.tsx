import React from "react";
import {ReactComponent as NurserySvg} from '../../title/components/nursery.svg'

interface Props {
    className?: string;
};

function NurseryIco({className}: Props) {
    return(
    <NurserySvg className={className}/>
    );   
};

export default NurseryIco;