import { GalleryItem } from '../GalleryItem/GalleryItem';

export const ImageGallery = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  return (
    <section>
      <h2 className="visually-hidden">gallery section</h2>
      <ul className="ImageGallery">
        <GalleryItem
          images={images}
          handleModalImage={handleModalImage}
          handleModalAlt={handleModalAlt}
          showModal={showModal}
        />
      </ul>
    </section>
  );
};