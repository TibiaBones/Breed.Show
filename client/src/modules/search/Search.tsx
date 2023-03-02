import {ReactComponent as SearchButton} from './searchButton.svg';

function Search() {
    return (
        <div className="Search">
            <form>
                <input className="Search-Input" placeholder="Что будем искать?"></input>
            </form>
            <SearchButton/>
        </div>
    );
}

export default Search;