import { useState } from "react";
import "../index.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    src: "",
    name: "",
    opened: false,
  });
  const closeAllPopups = () => {
    setisEditProfilePopupOpen(false);
    setIsAddPlacePopup(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard({
      ...selectedCard,
      opened: false,
    });
  };
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopup(true);
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard({ src: card.link, name: card.name, opened: true });
  }

  return (
    <div className="root">
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="add-card"
          title="Новое место"
          isAddPlacePopupOpen={true}
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__style popup__style_type_name popup-add-card__input popup-add-card__input_type_name"
            id="mesto-input"
            value=""
            name="name"
            placeholder="Название"
            required
          />
          <span className="popup__error mesto-input-error"></span>
          <input
            type="url"
            className="popup__style popup__style_type_link popup-add-card__input popup-add-card__input_type_link"
            id="link-input"
            value=""
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isEditProfilePopupOpen={true}
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__style popup__style_type_name"
            id="name-input"
            name="name"
            value=""
            required
          />
          <span className="popup__error name-input-error"></span>
          <input
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__style popup__style_type_about"
            id="about-input"
            name="about"
            value=""
            required
          />
          <span className="popup__error about-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isEditAvatarPopupOpen={true}
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__style"
            id="avatar"
            name="avatar"
            value=""
            required
          />
          <span className="popup__error avatar-error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
