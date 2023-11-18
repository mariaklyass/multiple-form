import { useState } from "react";
import Navbar from "../components/Navbar";
import Address from "../components/Address";
import NewTransport from "../components/newTransport";
import TransportList from "../components/TransportList";
import EditTransport from "../components/NewEdit";
import Contacts from "../components/Contacts";
import Modal from "../components/Modal";
import useModal from "../components/useModal";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  // states and handlers
  // ADDRESS
  const [address, setAddress] = useState({
    from: "",
    to: "",
    duration: 0,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onChangeDate = (date) => {
    setSelectedDate(date);
    let formatted = moment(date).format("DD.MM.yyyy");
    console.log(formatted);
  };
  const dateFormat = "dd.MM.yyyy";

  const handleAddress = (e: any) => {
    const { name, value } = e.target;
    setAddress((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleDuration = (e: any) => {
    const { name } = e.target;
    setAddress((prev: any) => {
      if (name === "-") {
        return { ...prev, duration: parseInt(e.target.value) - 1 };
      } else if (name === "+") {
        return { ...prev, duration: parseInt(e.target.value) + 1 };
      }
    });
  };
  // TRANSPORT
  const [items, updateItems] = useState([
    {
      name: "Transport 1",
      movers: false,
      passengers: false,
      moversNumber: 0,
      passengersNumber: 0,
      selected: "Любая газель1",
    },
    {
      name: "Transport 2",
      movers: false,
      passengers: false,
      moversNumber: 0,
      passengersNumber: 0,
      selected: "Любая газель2",
    },
  ]);
  const [showAddFieldModal, updateShowAddFieldModal] = useState(false);
  const [showEditFieldModal, updateShowEditFieldModal] = useState(false);
  const [activeItem, updateActiveItem] = useState({});

  // CONTACTS
  const [contacts, setContacts] = useState({
    surname: "",
    name: "",
    phone: "",
    email: "",
  });
  const handleContacts = (e: any) => {
    const { name, value } = e.target;
    setContacts((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // MODAL (SUBMIT)
  const { isShowing, toggle } = useModal();
  // RESET
  const handleReset = () => {
    setAddress({ from: "", to: "", duration: 0 });
    setSelectedDate(new Date());
    updateItems([
      {
        name: "Transport 1",
        movers: false,
        passengers: false,
        moversNumber: 0,
        passengersNumber: 0,
        selected: "Любая газель1",
      },
      {
        name: "Transport 2",
        movers: false,
        passengers: false,
        moversNumber: 0,
        passengersNumber: 0,
        selected: "Любая газель2",
      },
    ]);
    setContacts({
      surname: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <Navbar />
      <section className="section_wrapper">
        <h1 className="heading_main">Заявка на отправку груза</h1>
        <form>
          <div className="gap">
            <section className="grid">
              <Address
                address={address}
                onChangeAddress={handleAddress}
                onCounter={handleDuration}
                selectedDate={selectedDate}
                onChangeDate={onChangeDate}
                format={dateFormat}
              />
            </section>
            <section>
              {showAddFieldModal ? (
                <NewTransport
                  items={items}
                  updateItems={updateItems}
                  updateShowAddFieldModal={updateShowAddFieldModal}
                />
              ) : null}
              {showEditFieldModal ? (
                <EditTransport
                  items={items}
                  updateItems={updateItems}
                  updateShowEditFieldModal={updateShowEditFieldModal}
                  activeItem={activeItem}
                  updateActiveItem={updateActiveItem}
                />
              ) : null}

              <div className="divider-line"></div>
              <TransportList
                activeItem={activeItem}
                updateActiveItem={updateActiveItem}
                updateShowEditFieldModal={updateShowEditFieldModal}
                updateItems={updateItems}
                items={items}
              />
              <div
                className="step-border_sm"
                onClick={() => updateShowAddFieldModal(true)}
              >
                <img className="icon" src="./plus.svg"></img>
                Добавить еще транспорт
              </div>
            </section>

            <Contacts contacts={contacts} onChangeContacts={handleContacts} />

            <div className="grid">
              <button className="btn_submit" onClick={toggle}>
                Отправить
              </button>
              <button className="btn_reset" onClick={handleReset}>
                Сбросить
              </button>
            </div>
          </div>
        </form>
      </section>

      <div>
        {" "}
        <Modal
          isShowing={isShowing}
          hide={toggle}
          items={items}
          result={[address, items, contacts]}
          date={moment(selectedDate).format("DD.MM.yyyy")}
        />
      </div>
    </div>
  );
};
export default Form;
