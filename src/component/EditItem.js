import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-regular-svg-icons";

const EditItem = () => {
  return (
    <section className="create-nft">
    <div className='create-nft-form'>
        <form>
            <h1>Edit Item</h1>
            
            <p>Image, Video, Audio, or 3D Model</p>
            <small>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</small>
            <label htmlFor='file-upload' className='file-upload'>
                <span className='upload-overlay'> </span>
                <input type="file" id='file-upload' />
                <span className='upload-screen-read'><FontAwesomeIcon icon={faImage} style={{ fontSize: '70px' }} beat /><img src="" alt="" style={{ zIndex: '10', objectFit: 'contain' }} /></span>
            </label>
            
            
            <div className='nft-create-text'>
                <label htmlFor='file-price' className='nft-create-name'>
                    Price <span>USD</span>
                </label>
                <input type="text" id='file-price' placeholder='Enter price of item'/>
            </div>
            <div className='nft-create-text'>
                <label htmlFor='file-description' className='nft-create-desc'>
                <p>Description </p>
                <small>The description will be included on the item's detail page. </small>
                </label>
                <textarea rows={'3'} cols={'30'} id='file-description' placeholder='Provide a detailed description of your item'/>
            </div>
            <div className='nft-create-text'>
                <label htmlFor='file-quantity' className='nft-create-name'>
                    <p>Supply</p>
                    <small>The number of items that can be minted.</small>
                </label>
                <input type="text" id='file-price' placeholder='Enter price of item'/>
            </div>
            
            <button> Save </button>
        </form>
    </div>

</section>
  )
}

export default EditItem