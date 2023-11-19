import { useState } from "react";
interface NewTransportProps {
  updateShowAddFieldModal: (value: boolean) => void;
  items: Item[];
  updateItems: (
    items: {
      name: string;
      movers: boolean;
      passengers: boolean;
      moversNumber: number;
      passengersNumber: number;
      selected: string;
    }[]
  ) => void;
}
interface Item {
  name: string;
  movers: boolean;
  passengers: boolean;
  moversNumber: number;
  passengersNumber: number;
  selected: string;
}
const NewTransport = (props: NewTransportProps) => {
  const { updateShowAddFieldModal, items, updateItems } = props;

  const [internalFieldMoversNumber, updateInternalFieldMoversNumber] =
    useState(0);
  const [internalFieldPassengersNumber, updateInternalFieldPassengersNumber] =
    useState(0);

  const handleMoversNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === "-") {
      updateInternalFieldMoversNumber(parseInt(e.currentTarget.value) - 1);
    } else if (name === "+") {
      updateInternalFieldMoversNumber(parseInt(e.currentTarget.value) + 1);
    }
  };

  const handlePassengersNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === "-") {
      updateInternalFieldPassengersNumber(parseInt(e.currentTarget.value) - 1);
    } else if (name === "+") {
      updateInternalFieldPassengersNumber(parseInt(e.currentTarget.value) + 1);
    }
  };

  const [internalFieldMovers, updateInternalFieldMovers] = useState(true);
  const handleMovers = () => {
    updateInternalFieldMovers(!internalFieldMovers);
  };
  const [internalFieldPassengers, updateInternalFieldPassengers] =
    useState(true);
  const handlePassengers = () => {
    updateInternalFieldPassengers(!internalFieldPassengers);
  };
  const [internalFieldType, updateInternalFieldType] =
    useState("Любая газель1");

  const truckOptions = [
    { name: "Любая газель1" },
    { name: "Любая газель2" },
    { name: "Любая газель3" },
  ];

  return (
    <div className="step-border_add">
      <h3 className="center">Отметьте необходимые поля и нажмите "Добавить"</h3>

      <div className="grid">
        <div className="input">
          <div className="counter">
            Грузчики
            <div className="counter__btn-switch">
              <button
                className={internalFieldMovers ? "on" : "off"}
                type="button"
                value={internalFieldMovers.toString()}
                onClick={handleMovers}
              >
                <span />
              </button>
            </div>
          </div>
          <div className="counter">
            Кол-во грузчиков
            <div className="counter__btn">
              {" "}
              <button
                type="button"
                name="-"
                value={internalFieldMoversNumber}
                onClick={handleMoversNumber}
              >
                -
              </button>
              {internalFieldMoversNumber}
              <button
                type="button"
                name="+"
                value={internalFieldMoversNumber}
                onClick={handleMoversNumber}
              >
                +
              </button>
            </div>
          </div>
          <div className="counter">
            Пассажиры
            <div className="counter__btn-switch">
              <button
                className={internalFieldPassengers ? "on" : "off"}
                type="button"
                value={internalFieldPassengers.toString()}
                onClick={handlePassengers}
              >
                <span />
              </button>
            </div>
          </div>
          <div className="counter">
            Кол-во пассажиров
            <div className="counter__btn">
              <button
                type="button"
                name="-"
                value={internalFieldPassengersNumber}
                onClick={handlePassengersNumber}
              >
                -
              </button>
              {internalFieldPassengersNumber}
              <button
                type="button"
                name="+"
                value={internalFieldPassengersNumber}
                onClick={handlePassengersNumber}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="select-wrapper">
          <label>
            Любая газель
            <select
              onChange={(e) => updateInternalFieldType(e.target.value)}
              className="input"
            >
              {truckOptions.map((t, index) => (
                <option value={t.name} key={index}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid add">
        <div
          className="add-btn_cancel"
          onClick={() => updateShowAddFieldModal(false)}
        >
          Отменить
        </div>
        <div
          className="add-btn_submit"
          onClick={() => {
            updateShowAddFieldModal(false);
            updateItems([
              ...items,
              {
                name: "",
                movers: internalFieldMovers,
                passengers: internalFieldPassengers,
                moversNumber: internalFieldMoversNumber,
                passengersNumber: internalFieldPassengersNumber,
                selected: internalFieldType,
              },
            ]);
          }}
        >
          Добавить
        </div>
      </div>
    </div>
  );
};

export default NewTransport;
