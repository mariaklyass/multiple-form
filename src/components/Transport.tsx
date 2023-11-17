const Transport = (props: any) => {
  return (
    <div className="step-border_main">
      <h2>{props.title}</h2>
      <div className="grid">
        <div className="input">
          <div className="counter">
            Грузчики
            <div className="counter__btn-switch">
              {props.switch.map((stateObj, index) => {
                if (stateObj.name === "movers") {
                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={(event) => props.onToggle(event, stateObj.name)}
                      value={stateObj.status}
                      className={stateObj.status ? "on" : "off"}
                    >
                      <span />
                    </button>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>

          <div className="counter">
            Кол-во грузчиков
            <div className="counter__btn">
              <button
                type="button"
                name="-"
                value={props.transport.moversNumber}
                onClick={props.onCounterMovers}
              >
                -
              </button>{" "}
              {props.transport.moversNumber}
              <button
                type="button"
                name="+"
                value={props.transport.moversNumber}
                onClick={props.onCounterMovers}
              >
                +
              </button>
            </div>
          </div>

          <div className="counter">
            Пассажиры
            <div className="counter__btn-switch">
              {props.switch.map((stateObj, index) => {
                if (stateObj.name === "passengers") {
                  return (
                    <button
                      key={index}
                      onClick={(event) => props.onToggle(event, stateObj.name)}
                      value={stateObj.status}
                      className={stateObj.status ? "on" : "off"}
                    >
                      <span />
                    </button>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>

          <div className="counter">
            Кол-во пассажиров
            <div className="counter__btn">
              <button
                type="button"
                name="-"
                value={props.transport.passengersNumber}
                onClick={props.onCounterPassengers}
              >
                -
              </button>{" "}
              {props.transport.passengersNumber}
              <button
                type="button"
                name="+"
                value={props.transport.passengersNumber}
                onClick={props.onCounterPassengers}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="select-wrapper">
          <select
            name="transport-select"
            className="input"
            defaultValue="transport-1"
            value={props.select}
            onChange={props.onSelect}
          >
            <option value="transport-1">Любая газель</option>
            <option value="transport-1">Любая газель</option>
            <option value="transport-3">Любая газель</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Transport;
