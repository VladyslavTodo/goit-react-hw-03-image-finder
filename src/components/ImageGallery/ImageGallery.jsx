import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, handelModalOpen }) => {
  if (images.length === 0) {
    return;
  }

  return (
    <List>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          item={item}
          handelModalOpen={handelModalOpen}
        />
      ))}
    </List>
  );
};

export default ImageGallery;
