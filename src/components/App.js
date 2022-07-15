import React from 'react';
import '../index.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js';

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState(false);
  const closeAllPopups = () => {
    setisEditProfilePopupOpen(false);
    setIsAddPlacePopup(false);
    setisEditAvatarPopupOpen(false);
    handleCardClick(false);
  }

  return (
    <div className="root">
      <div className="container">
        <Header />  
        <Main 
          onEditProfile = {() => {setisEditProfilePopupOpen(true)}}
          onAddPlace = {() => {setIsAddPlacePopup(true)}}
          onEditAvatar = {() => {setisEditAvatarPopupOpen(true)}}
          onCardClick = {() => {handleCardClick(true)}}
        />
        <Footer />

        <PopupWithForm name="add-card" title="Новое место" isAddPlacePopupOpen = {true}   buttonText="Создать" isOpen = {(isAddPlacePopupOpen ? 'popup_opened' : '')} onClose = {closeAllPopups}>
          <>
            <input type="text" className="popup__style popup__style_type_name popup-add-card__input popup-add-card__input_type_name" id="mesto-input" value="" name="name" placeholder="Название" required />
            <span className="popup__error mesto-input-error"></span>
            <input type="url" className="popup__style popup__style_type_link popup-add-card__input popup-add-card__input_type_link" id="link-input" value="" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__error link-input-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm name="edit-profile" title="Редактировать профиль" isEditProfilePopupOpen = {true} buttonText="Сохранить" isOpen = {(isEditProfilePopupOpen ? 'popup_opened' : '')} onClose = {closeAllPopups}>
          <>
            <input type="text" minLength="2" maxLength="40" className="popup__style popup__style_type_name" id="name-input" name="name" value="" required />
            <span className="popup__error name-input-error"></span>
            <input type="text" minLength="2" maxLength="200" className="popup__style popup__style_type_about" id="about-input" name="about" value="" required />
            <span className="popup__error about-input-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" isEditAvatarPopupOpen = {true} buttonText="Сохранить" isOpen = {(isEditAvatarPopupOpen ? 'popup_opened' : '')}
        onClose = {closeAllPopups}>
          <>
            <input type="url" className="popup__style" id="avatar" name="avatar" value="" required />
            <span className="popup__error avatar-error"></span>
          </>
        </PopupWithForm>
        
        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}> 
        </ImagePopup>
      </div>
    </div>
  );
}

export default App;
