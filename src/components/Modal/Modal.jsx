import { Overlay, ModalStyle, Img } from './Modal.style';

import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseESC);
    // document.addEventListener('click', this.handleCloseClick);
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
