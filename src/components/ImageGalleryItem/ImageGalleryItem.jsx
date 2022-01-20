import { Fragment } from 'react';

function ImageGalleryItem({ image, onImageClick, id}) {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <Fragment>
      <li className="gallery-item ImageGalleryItem" key={id}>
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => {
            onImageClick(largeImageURL);
          }}
        />
      </li>
    </Fragment>
  );
}

export default ImageGalleryItem;
