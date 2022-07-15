import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={card ? 'popup popup-photo popup_opened' : 'popup popup-photo'}>
      <div className="popup-photo__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <img src={'https://images.unsplash.com/photo-1625218018923-7ce1b40712dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'} alt="Фото" className="popup-photo__big-photo" />
        <p className="popup-photo__text"></p>
      </div>
    </div>
  )
}

export default ImagePopup;


