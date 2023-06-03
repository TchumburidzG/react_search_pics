import './SearchBar.css';
import {useState} from "react";

function Searchbar({onSubmit}) {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event_today) => {
        event_today.preventDefault();
        onSubmit(term);
    };
    const handleChange = (event) => {setTerm(event.target.value);};

    return (
    <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label className='search-input' >search for images</label>
            <input className='search-input' value={term} onChange={handleChange}/>
        </form>
    </div>
    );
}

export default Searchbar

