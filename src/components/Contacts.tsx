const Contacts = (props) => {
  return (
    <div className="step-border_main">
      <h2>Контакты</h2>
      <div className="contacts-wrapper">
        <label className="input">
          <h4>Фамилия</h4>
          <input
            type="text"
            name="surname"
            placeholder="Укажите фамилию"
            value={props.contacts.surname}
            onChange={props.onChangeContacts}
          />
        </label>

        <label className="input">
          <h4>Телефон</h4>
          <input
            type="text"
            name="phone"
            placeholder="+7 (___) ___ - __ - __"
            value={props.contacts.phone}
            onChange={props.onChangeContacts}
          />
        </label>
        <label className="input">
          <h4>Имя</h4>
          <input
            type="text"
            name="name"
            placeholder="Укажите имя"
            value={props.contacts.name}
            onChange={props.onChangeContacts}
          />
        </label>
        <label className="input">
          <h4>E-mail</h4>
          <input
            type="text"
            name="email"
            value={props.contacts.email}
            onChange={props.onChangeContacts}
          />
        </label>
      </div>
      <div className="consent">
        <input type="checkbox" id="consent" name="consent" required></input>
        Соглашаюсь на обработку своих персональных данных
      </div>
    </div>
  );
};

export default Contacts;
