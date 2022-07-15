function PopupWithForm(props) {
  return (
    <>
    <div className={`popup popup-${props.name} ${props.isOpen}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick = {props.onClose}></button>
        <h2 className="popup__text">{props.title}</h2>
        <form name="profile" className={`form popup-${props.name}__form`} noValidate>
          {props.children}
          <button className="popup__submit popup__save-button" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
    </>
  )    
}
export default PopupWithForm;