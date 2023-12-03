import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImg, onClose }) => {
  useEffect(() => {
    const closeEsc = event => {
      event.code === 'Escape' && this.props.onClose();
    };
    document.addEventListener('keydown', closeEsc);
    return () => {
      document.removeEventListener('keydown', closeEsc);
    };
  }, [onClose]);
  const handleClick = event => {
    event.target === event.currentTarget && onClose();
  };
  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
};

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.closeEsc);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.closeEsc);
//   }

//   closeEsc = event => {
//     event.code === 'Escape' && this.props.onClose();
//   };
//   handleClick = event => {
//     event.target === event.currentTarget && this.props.onClose();
//   };

//   render() {
//     const { largeImg } = this.props;
//     return (
//       <div className={css.overlay} onClick={this.handleClick}>
//         <div className={css.modal}>
//           <img src={largeImg} alt="" />
//         </div>
//       </div>
//     );
//   }
// }
export default Modal;
