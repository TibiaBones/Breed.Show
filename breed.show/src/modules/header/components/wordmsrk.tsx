import React from 'react';
import {ReactComponent as WordmarkSvg} from './Wordmark.svg';

interface Props {
    className?: string;
};

function Wordmark ({className}: Props){
    return(
        <WordmarkSvg className={className}/>
    );
};

export default Wordmark;