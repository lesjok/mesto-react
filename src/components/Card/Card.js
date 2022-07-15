import trash from '../../images/Trash.svg';

function Card (props) {
  function handleCardClick() {
  props.onCardClick(props);
}
  return (
      <li className="gallery-item">
        <img src={props.link} alt={props.name} className="gallery-item__img" onClick={handleCardClick} />
        <img src={trash} alt="корзина" className="gallery-item__trash" />
        <div className="gallery-item__text">
          <h2 className="gallery-item__name">{props.name}</h2>
          <button className="gallery-item__like" type="button" aria-label="Нравится">
            <span className="gallery-item__count-of-likes">{props.likes.length}</span>
          </button>  
        </div>
    </li>
  )  
}

export default Card;