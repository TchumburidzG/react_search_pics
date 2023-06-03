import './ShowImage.css'
function ImageShow({image}) {
    return (
        <div className='img-div'>
            <img className='each-images' src={image.urls.small} alt={image.alt_description}/>
        </div>

    );
}

export default ImageShow;