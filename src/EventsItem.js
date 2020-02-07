//КОМПОНЕНТ ОТОБРАЖАЕТ В СТЕЙТ В ВИДЕ СПИСКА + ДОБАВЛЯЕТ В ИЗБРАННОЕ

import React from 'react';
import './App.css';
import PopupExample from './Popup'

let EventsItem = (props) => {
  const ClassName = props.favorites ? 'itIsFvavorite' : 'itIsNotFvavorite';


  return(
    <div className={ClassName} style={styles.div1}>

          <p style={styles.p}>{props.title}</p>
          <ul style={styles.ul}>
          <li style={styles.li}>{props.description}</li>
          <li>Стоимость входного билета: от {props.price} рублей</li>
        </ul>

        <button onClick={props.addToFavorite} style={styles.button}>&#9733;</button>

        <PopupExample
        title={props.title}
        description={props.description}
        available={props.available}
        />

    </div>
  )
}

export default EventsItem


//Добавим компоненту стили
let styles = {
  div1: {
    width: '500px',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 0',
    margin: '10px auto',
    position: 'relative'
  },
  ul: {
    listStyleType: 'none'
  },
  li: {
    display: 'block',
    marginBottom: '5px'
  },
  p: {
    textAlign: 'center',
    textDecoration: 'underline',
    marginBottom: '10px'
  },
  button: {
    position: 'absolute',
    borderRadius: '30px',
    border: '1px solid black',
    background: '#7fffd4',
    top: '5px',
    right: '5px',
    outline: 'none'
  }
}
