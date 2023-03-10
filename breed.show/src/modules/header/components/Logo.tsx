import React from 'react';
import {ReactComponent as LogoSvg} from './logo.svg';

interface Props {
    className?: string;
};

function Logo ({className}: Props) {
    return(
        <LogoSvg className={className}/>
    );
};

export default Logo;;