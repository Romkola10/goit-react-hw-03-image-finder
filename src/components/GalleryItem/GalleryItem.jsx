export const GalleryItem = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  return (
    <>
      {images.map(image => (
        <li
          key={image.id}
          className="GalleryItem"
          onClick={showModal}
        >
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="GalleryItem-image"
            onClick={() => {
              handleModalImage(image.largeImageURL);
              handleModalAlt(image.tags);
            }}
          />
        </li>
      ))}
    </>
  );
};