import ReactDOM from 'react-dom';
import { XLargeIcon } from './Icons';

const Modal_Style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '1000',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'antiquewhite',
    borderRadius: '10px',
    padding: '1rem',
    width: '90vw',
    maxHeight: '90vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    boxShadow: '0 0 5px white'
}

const OverLay_Style = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '100',
    backgroundColor: 'rgba(25, 26, 27, .8)',
}

const Btn_Style = {
    width: 'fit-content',
    display: 'flex',
    marginLeft: 'auto',
}

const Modal = ({ children, showModal, closeModal }) => {

    if (!showModal) { return null }

    return ReactDOM.createPortal(
        <>
            <div onClick={() => closeModal()} style={OverLay_Style}></div>
            <div style={Modal_Style} className='md-width-almost-full'>
                <button onClick={() => closeModal()} className='btn-icon' style={Btn_Style}><XLargeIcon size={'18'}/></button> <br />
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;