import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type AddressProps = {
  address: { from: string; to: string; duration: number };
  onChangeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCounter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
  format: string;
};

const Address = ({
  address,
  onChangeAddress,
  onCounter,
  selectedDate,
  onChangeDate,
  format,
}: AddressProps) => {
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
              value={address.from}
              onChange={onChangeAddress}
            />
          </label>
          <label className="input">
            <h4>Дата отправки</h4>
            <DatePicker
              className="date"
              selected={selectedDate}
              onChange={onChangeDate}
              dateFormat={format}
            />
          </label>
        </div>
        <div className="counter">
          Длительность
          <div className="counter__btn">
            <button
              type="button"
              value={address.duration}
              onClick={onCounter}
              name="-"
            >
              -
            </button>{" "}
            {address.duration} ч.
            <button
              type="button"
              value={address.duration}
              onClick={onCounter}
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
              value={address.to}
              onChange={onChangeAddress}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Address;
