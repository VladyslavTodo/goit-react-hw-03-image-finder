import { Component } from 'react';

import { Overlay, ModalStyle, Img } from './Modal.style';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseESC);
  }

  handleCloseESC = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleCloseClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleCloseClick}>
        <ModalStyle>
          <Img src={this.props.modalUrl} alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}

export default Modal;
