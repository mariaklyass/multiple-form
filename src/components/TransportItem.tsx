type TransportItemProps = {
  value: any;
  index: number;
  items: {
    name: string;
    movers: boolean;
    passengers: boolean;
    moversNumber: number;
    passengersNumber: number;
    selected: string;
  }[];
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
  updateShowEditFieldModal: (value: boolean) => void;
  updateActiveItem: (value: string) => void;
  activeItem: string;
};

const TransportItem = ({
  value,
  index,
  items,
  updateItems,
  updateShowEditFieldModal,
  updateActiveItem,
}: TransportItemProps) => {
  return (
    <div className="step-border_main">
      <h2>Транспорт {index + 1}</h2>
      <div className="grid">
        <div className="input">
          <div className="counter">
            Грузчики
            <div className="counter__btn-switch">
              <button
                className={value.movers ? "on" : "off"}
                type="button"
                value={value.movers}
              >
                <span />
              </button>
            </div>
          </div>
          <div className="counter">
            Кол-во грузчиков
            <div className="counter__btn">
              {" "}
              <button type="button" name="-" value={value.moversNumber}>
                -
              </button>
              {value.moversNumber}
              <button type="button" name="+" value={value.moversNumber}>
                +
              </button>
            </div>
          </div>
          <div className="counter">
            Пассажиры
            <div className="counter__btn-switch">
              <button
                className={value.passengers ? "on" : "off"}
                type="button"
                value={value.passengers}
              >
                <span />
              </button>
            </div>
          </div>
          <div className="counter">
            Кол-во пассажиров
            <div className="counter__btn">
              <button type="button" name="-" value={value.passengersNumber}>
                -
              </button>
              {value.passengersNumber}
              <button type="button" name="+" value={value.passengersNumber}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="select-wrapper">
          <select className="input">
            <option value={value.selected}>{value.selected}</option>
            <option value={value.selected}>{value.selected}</option>
            <option value={value.selected}>{value.selected}</option>
          </select>
        </div>
        <div className="flex">
          <span
            onClick={() => {
              updateShowEditFieldModal(true);
              updateActiveItem(value);
            }}
          >
            <img className="icon" src="./edit.svg"></img>
          </span>
          <span
            onClick={() =>
              updateItems(items.filter((i) => i.name !== value.name))
            }
          >
            <p>X</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default TransportItem;
