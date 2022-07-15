import api from '../../utils/Api.js';
import React from 'react';
import Card from '../Card/Card.js'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  React.useEffect(() => {
    api.getUser()
    .then((user) => {
      setUserName(user.name)
      setUserDescription(user.about)
      setUserAvatar(user.avatar)
    });
    api.getInitialCards()
    .then((cards) => {
      setCards(cards);
    })
  }, []);
 
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [UserAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  return (
        <main>
      <section className="profile">
        <div className="profile__avatar" onClick = {onEditAvatar} style={{ backgroundImage: `url(${UserAvatar})` }} >
        </div>   
        <div className="profile__title-group">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__button profile__button_type_edit" type="button" aria-label="Редактировать профиль" onClick = {onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>       
        </div>     
        <button className="profile__button profile__button_type_add" type="button" aria-label="Добавить фотографии" onClick = {onAddPlace}></button>
      </section>
      
      <div>
        <ul class="gallery">
          {cards.map((card) => (
            <Card 
            key = {card.id}
            link = {card.link}
            name = {card.name}
            likes = {card.likes}
            onCardClick = {onCardClick}/>
           ))}
        </ul>
      </div>
    </main>
  )
}

export default Main;
