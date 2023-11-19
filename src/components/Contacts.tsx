type ContactsProps = {
  contacts: { name: string; surname: string; phone: string; email: string };
  onChangeContacts: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Contacts = ({ contacts, onChangeContacts }: ContactsProps) => {
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
            value={contacts.surname}
            onChange={onChangeContacts}
          />
        </label>

        <label className="input">
          <h4>Телефон</h4>
          <input
            type="text"
            name="phone"
            placeholder="+7 (___) ___ - __ - __"
            value={contacts.phone}
            onChange={onChangeContacts}
          />
        </label>
        <label className="input">
          <h4>Имя</h4>
          <input
            type="text"
            name="name"
            placeholder="Укажите имя"
            value={contacts.name}
            onChange={onChangeContacts}
          />
        </label>
        <label className="input">
          <h4>E-mail</h4>
          <input
            type="text"
            name="email"
            value={contacts.email}
            onChange={onChangeContacts}
          />
        </label>
      </div>
      <div className="consent">
        <input type="checkbox" id="consent" name="consent"></input>
        Соглашаюсь на обработку своих персональных данных
      </div>
    </div>
  );
};

export default Contacts;
