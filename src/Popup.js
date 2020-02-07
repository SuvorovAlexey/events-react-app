import React from "react";
import Popup from "reactjs-popup";


const PopupExample = (props) => (
  <Popup trigger={<button className="button"> Подрбнее </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> {props.title} </div>

        <div className="content">
          {props.description}
          <br />

          <p>Осталось билетов на мероприятие: {props.available}</p>
        </div>

        <div className="actions">

          <Popup
            trigger={<button className="button-info"> Узнать о разработчике </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span className="about-me">
              <a href="https://vk.com/id37370228">Алексей Суворов</a><br /> Frontend-разработчик <br />
              <a href="https://murino.hh.ru/resume/f9b5a587ff0756dbc80039ed1f565637475554">Компетенции и кейсы</a>
            </span>
          </Popup>


        </div>
      </div>
    )}
  </Popup>
);

export default PopupExample;
