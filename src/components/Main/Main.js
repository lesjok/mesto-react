import { useContext } from "react";
import React from "react";
import Card from "../Card/Card.js";
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></div>
        <div className="profile__title-group">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__button profile__button_type_edit"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__button profile__button_type_add"
          type="button"
          aria-label="Добавить фотографии"
          onClick={onAddPlace}
        ></button>
      </section>

      <div>
        <ul className="gallery">
          {cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              elem={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
