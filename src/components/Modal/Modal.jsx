import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeEsc);
  }

  closeEsc = event => {
    event.code === 'Escape' && this.props.onClose();
  };
  handleClick = event => {
    event.target === event.currentTarget && this.props.onClose();
  };

  render() {
    const { largeImg } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
