import './index.css'

const ImageItem = props => {
  const {imageDetails, onImageClick} = props
  const {id, thumbnailUrl} = imageDetails
  const imageClick = () => {
    onImageClick(id)
  }
  return (
    <li className="image-item">
      <button type="button" onClick={imageClick} className="image-button">
        <img className="each-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
