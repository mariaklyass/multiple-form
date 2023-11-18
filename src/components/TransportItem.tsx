const TransportItem = ({
  value,
  index,
  currentIndex,
  items,
  updateItems,
  activeItem,
  updateShowEditFieldModal,
  updateActiveItem,
}) => {
  return (
    <div data-index={index} className="step-border_main">
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
                // onClick={handleMovers}
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
                value={value.moversNumber}
                // onClick={handleMoversNumber}
              >
                -
              </button>
              {value.moversNumber}
              <button
                type="button"
                name="+"
                value={value.moversNumber}
                // onClick={handleMoversNumber}
              >
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
                // onClick={handlePassengers}
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
                value={value.passengersNumber}
                // onClick={handlePassengersNumber}
              >
                -
              </button>
              {value.passengersNumber}
              <button
                type="button"
                name="+"
                value={value.passengersNumber}
                // onClick={handlePassengersNumber}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="select-wrapper">
          <select
            // onChange={(e) => updateInternalFieldType(e.target.value)}
            className="input"
          >
            {/* {truckOptions.map((t, index) => (
                <option value={t.name} key={index}>
                  {t.name}
                </option>
              ))} */}
            <option value={value.selected}>{value.selected}</option>
            <option value={value.selected}>{value.selected}</option>
            <option value={value.selected}>{value.selected}</option>
          </select>
        </div>

        {/* <div className="drag-icon-container"> */}
        {/* <SVG src={drag} alt="draggable" className="draggable" /> */}
        {/* </div> */}
        {/* {value.name} */}
        {/* {value.required ? "*" : ""} */}

        <div className="flex">
          <span
            onClick={() => {
              updateShowEditFieldModal(true);
              updateActiveItem(value);
            }}
          >
            {/* <SVG src={edit} alt="edit" className="field-action" /> */}

            <img className="icon" src="./edit.svg"></img>
          </span>
          <span
            onClick={() =>
              updateItems(items.filter((i) => i.name !== value.name))
            }
          >
            {/* <SVG src={close} alt="remove" className="field-action" /> */}
            <p>X</p>
          </span>
        </div>
        {/* divide here, next is grid's </div> */}
      </div>
    </div>
  );
};
export default TransportItem;
