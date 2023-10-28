import { Component } from 'react';
import { getImagesApi } from '../sevices/api';
import Notiflix from 'notiflix';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

import { List } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.SearchValue !== this.props.SearchValue) {
      this.setState({ page: 1 });
      this.fetchImages();
    }

    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { SearchValue } = this.props;
    const { page } = this.state;

    this.setState({ isLoading: true, error: null });
    getImagesApi(SearchValue, page)
      .then(data => {
        if (data.totalHits === 0) {
          Notiflix.Report.info('Wrong 😪', 'Try again');
        }
        this.setState(prevState => ({
          images:
            this.state.page === 1
              ? data.hits
              : [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handelloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setModalUrl = modalUrl => {
    this.setState({ modalUrl });
  };

  handelModalOpen = value => {
    this.setState({ isModalOpen: true });
    this.setModalUrl(value);
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isLoading, error, images, isModalOpen, modalUrl } = this.state;

    return (
      <>
        {error && <h1>{error}</h1>}
        {images && (
          <List>
            {images.map(item => (
              <ImageGalleryItem
                key={item.id}
                item={item}
                handelModalOpen={this.handelModalOpen}
              />
            ))}
          </List>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && <ButtonLoadMore onClick={this.handelloadMore} />}
        {isModalOpen && (
          <Modal modalUrl={modalUrl} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGallery;
