import React from "react";
// import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
const Modal = (props: any) => {
  return props.isShowing
    ? createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <h1 className="modal-header">Заявка отправлена</h1>
              <div className="modal-container">
                <div className="results">
                  <p className="secondary-text">
                    <span className="bold">Откуда забрать: </span>
                    {props.result[0].from}{" "}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Куда привезти: </span>{" "}
                    {props.result[0].to}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Дата отправки: </span>
                    {props.date}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Длительность: </span>
                    {props.result[0].duration}
                  </p>
                </div>
                <hr className="divider" />

                <div className="results">
                  <h3 className="heading_secondary">
                    Транспорт 1: <span>Любая газель</span>
                  </h3>
                  <p className="secondary-text">
                    <span className="bold">Кол-во грузчиков: </span>
                    {props.result[1].moversNumber}{" "}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Кол-во пассажиров: </span>{" "}
                    {props.result[1].passengersNumber}
                  </p>
                  <div></div>
                  <h3 className="heading_secondary">
                    Транспорт 1: <span>Любая газель</span>
                  </h3>
                  <p className="secondary-text">
                    <span className="bold">Кол-во грузчиков: </span>
                    {props.result[1].moversNumber}{" "}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Кол-во пассажиров: </span>{" "}
                    {props.result[1].passengersNumber}
                  </p>
                </div>
                <hr className="divider" />

                <div className="results">
                  <p className="secondary-text">
                    <span className="bold">Заказчик: </span>
                    <p>
                      {props.result[4].surname}
                      {props.result[4].name}
                    </p>
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Телефон: </span>{" "}
                    {props.result[4].phone}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Email: </span>
                    {props.result[4].email}
                  </p>
                </div>

                <p className="secondary-text">
                  Информация продублирована на электронную почту
                </p>
              </div>
              <button
                type="button"
                className="btn_submit btn_modal"
                data-dismiss="modal"
                // arias-label="Close"
                onClick={props.hide}
              >
                <span aria-hidden="true">OK</span>
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
