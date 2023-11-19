import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isShowing: boolean;
  hide: (e: React.MouseEvent<HTMLButtonElement>) => void;
  items: Item[];
  result: [
    {
      from: string;
      to: string;
      duration: number;
    },
    {
      name: string;
      movers: boolean;
      passengers: boolean;
      moversNumber: number;
      passengersNumber: number;
      selected: string;
    }[],
    {
      surname: string;
      name: string;
      phone: string;
      email: string;
    }
  ];
  date: string;
}
interface Item {
  movers: boolean;
  passengers: boolean;
  moversNumber: number;
  passengersNumber: number;
  selected: string;
}

const Modal = (props: ModalProps) => {
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

                {props.items.map((item, i: number) => {
                  return (
                    <div className="results" key={i}>
                      <h3 className="heading_secondary">
                        Транспорт {i + 1}: <span>{item.selected}</span>
                      </h3>
                      <p className="secondary-text">
                        <span className="bold">Кол-во грузчиков: </span>
                        {item.moversNumber}{" "}
                      </p>
                      <p className="secondary-text">
                        {" "}
                        <span className="bold">Кол-во пассажиров: </span>{" "}
                        {item.passengersNumber}
                      </p>
                    </div>
                  );
                })}
                <hr className="divider" />
                <div className="results">
                  <p className="secondary-text">
                    <span className="bold">Заказчик: </span>
                    <p>
                      {props.result[2].surname}
                      {props.result[2].name}
                    </p>
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Телефон: </span>{" "}
                    {props.result[2].phone}
                  </p>
                  <p className="secondary-text">
                    {" "}
                    <span className="bold">Email: </span>
                    {props.result[2].email}
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
