import Address from "../components/Address";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Transport from "../components/Transport";
import Contacts from "../components/Contacts";
import Modal from "../components/Modal";
import useModal from "../components/useModal";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  // states and handlers
  // for address
  const [address, setAddress] = useState({
    from: "",
    to: "",
    // date: "",
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
    const { name, value } = e.target;
    setAddress((prev: any) => {
      if (name === "-") {
        return { ...prev, duration: parseInt(e.target.value) - 1 };
      } else if (name === "+") {
        return { ...prev, duration: parseInt(e.target.value) + 1 };
      }
    });
  };
  // for transport
  const [transport, setTransport] = useState({
    moversNumber: 0,
    passengersNumber: 0,
  });
  const [transportSelect, setTransportSelect] = useState("transport-1");
  const [transportSwitch, setTransportSwitch] = useState([
    { name: "movers", status: false },
    { name: "passengers", status: false },
  ]);
  const handleSelect = (e) => {
    setTransportSelect(e.target.value);
  };
  const handleTransportToggle = (event: any, name: any) => {
    event.persist();
    event.preventDefault();
    const newTransportSwitch = transportSwitch.map((transport) => {
      if (transport.name === name) {
        return { ...transport, status: !transport.status };
      }
      return transport;
    });
    setTransportSwitch(newTransportSwitch);
  };
  const handleMovers = (e: any) => {
    const { name, value } = e.target;
    setTransport((prev: any) => {
      if (name === "-") {
        return { ...prev, moversNumber: parseInt(e.target.value) - 1 };
      } else if (name === "+") {
        return { ...prev, moversNumber: parseInt(e.target.value) + 1 };
      }
    });
  };
  const handlePassengers = (e: any) => {
    const { name, value } = e.target;
    setTransport((prev: any) => {
      if (name === "-") {
        return { ...prev, passengersNumber: parseInt(e.target.value) - 1 };
      } else if (name === "+") {
        return { ...prev, passengersNumber: parseInt(e.target.value) + 1 };
      }
    });
  };

  // for contacts
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

  // modal
  const { isShowing, toggle } = useModal();

  // reset button
  const handleReset = () => {
    setAddress({ from: "", to: "", date: "", duration: 0 });
    setTransport({
      moversNumber: 0,
      passengersNumber: 0,
    });
    setTransportSwitch([
      { name: "movers", status: false },
      { name: "passengers", status: false },
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
        {/* form itself */}
        <form>
          <div className="gap">
            {/* from address */}
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

            {/* transport */}
            <Transport
              title="Транспорт 1"
              transport={transport}
              switch={transportSwitch}
              select={transportSelect}
              onToggle={handleTransportToggle}
              onCounterMovers={handleMovers}
              onCounterPassengers={handlePassengers}
              onSelect={handleSelect}
            />

            {/* transport 2 */}
            <Transport
              title="Транспорт 2"
              // change props
              transport={transport}
              switch={transportSwitch}
              onToggle={handleTransportToggle}
              onCounterMovers={handleMovers}
              onCounterPassengers={handlePassengers}
            />
            {/* add transport */}
            {/* contacts */}
            <Contacts contacts={contacts} onChangeContacts={handleContacts} />

            {/* button send / reset */}
            {/* <Button /> */}
            <div className="grid">
              <button
                className="btn_submit"
                // value="Open modal"
                onClick={toggle}
              >
                Отправить
              </button>

              <button className="btn_reset" onClick={handleReset}>
                Сбросить
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* modal window */}
      <div>
        {" "}
        <Modal
          isShowing={isShowing}
          hide={toggle}
          result={[
            address,
            transport,
            transportSelect,
            transportSwitch,
            contacts,
          ]}
          date={moment(selectedDate).format("DD.MM.yyyy")}
        />
      </div>
    </div>
  );
};
export default Form;
