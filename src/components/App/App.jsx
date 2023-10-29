import { Component } from 'react';

import getImagesApi from '../sevices/api';

import Notiflix from 'notiflix';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    value: '',
    images: [],
    error: null,
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalUrl: null,
    totalHits: null,
  };

  componentDidUpdate(_, prevState) {
    const { value, page } = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { page, value } = this.state;

    this.setState({ isLoading: true, error: null });
    getImagesApi(value, page)
      .then(data => {
        if (data.totalHits === 0) {
          Notiflix.Report.info('Wrong 😪', 'Try again');
        }
        this.setState(prevState => ({
          images:
            this.state.page === 1
              ? data.hits
              : [...prevState.images, ...data.hits],
          totalHits: data.totalHits,
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  getSearchValue = value => {
    this.setState({ value: value, page: 1 });
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
    const { images, isLoading, isModalOpen, modalUrl, error, totalHits } =
      this.state;

    return (
      <>
        <Searchbar onSubmit={this.getSearchValue} />
        {error && <h1>{error}</h1>}
        <ImageGallery images={images} handelModalOpen={this.handelModalOpen} />
        {isLoading && <Loader />}
        {totalHits > images.length && (
          <ButtonLoadMore onClick={this.handelloadMore} />
        )}
        {isModalOpen && (
          <Modal modalUrl={modalUrl} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
