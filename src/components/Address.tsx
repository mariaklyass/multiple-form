import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Address = (props) => {
  return (
    <div className="grid_sm">
      <div className="step-border_address">
        <h2 className="heading_secondary">Откуда</h2>
        <div className="input__wrapper">
          <label className="input">
            <h4>Адрес</h4>
            <input
              type="text"
              name="from"
              placeholder="ул. Маршала Блюхера, 72"
              value={props.address.from}
              onChange={props.onChangeAddress}
            />
          </label>
          <label className="input">
            <h4>Дата отправки</h4>
            <DatePicker
              className="date"
              selected={props.selectedDate}
              onChange={props.onChangeDate}
              dateFormat={props.format}
            />
          </label>
        </div>
        <div className="counter">
          Длительность
          <div className="counter__btn">
            <button
              type="button"
              value={props.address.duration}
              onClick={props.onCounter}
              name="-"
            >
              -
            </button>{" "}
            {props.address.duration} ч.
            <button
              type="button"
              value={props.address.duration}
              onClick={props.onCounter}
              name="+"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="step-border_address sm">
        <h2 className="heading_secondary">Куда</h2>
        <div className="input__wrapper">
          <label className="input">
            <h4>Адрес</h4>
            <input
              type="text"
              name="to"
              placeholder="ул. Юннатов, 18"
              value={props.address.to}
              onChange={props.onChangeAddress}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Address;
