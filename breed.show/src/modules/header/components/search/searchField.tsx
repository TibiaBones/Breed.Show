import React from 'react';
import { ReactComponent as SearchButtonSvg } from './searchButtonSmall.svg'

// interface Props {
//     className?: string;
// };

// ({className}: Props)

function SearchField() {
    return (
        <div className="header-searchFieldContainer">
            {/* возможно изменить тег див на тег форм */}
            <form>
                <input className="header-searchField" placeholder="Что будем искать?"></input>
            </form>

            <SearchButtonSvg className="searchButton_img"/>
        </div>
    );
};

export default SearchField;