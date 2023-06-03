import {useState} from "react";
import SearchImage from "./components/api";
import SearchBar from "./components/SearchBar";
import Imagelist from "./components/ImageList"

function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const results = await SearchImage(term)
        setImages(results);
    };

    return (
        <div className="App">
            <SearchBar onSubmit={handleSubmit}/>
            <Imagelist images={images}/>
        </div>
    );
}

export default App;
