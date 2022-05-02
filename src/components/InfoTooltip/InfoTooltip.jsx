function InfoTooltip(props) {
  return (
    <section className="popup popup_type_tooltip popup_opened">
      <div className="popup__container">
        <button type="button" className="popup__close" />
        <div className="popup__tooltip-image popup__tooltip-image_success"></div>
        <p className="popup__tooltip-text popup__tooltip-text_success">
          Вы успешно зарегистрировались!
        </p>
      </div>
    </section>
  );
}
export default InfoTooltip;
