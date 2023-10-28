import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, handelModalOpen}) => {
  return (
    <Item key={item.id} onClick={() => handelModalOpen(item.largeImageURL)}>
      <Img src={item.webformatURL} alt={item.user} />
    </Item>
  );
};

export default ImageGalleryItem;
