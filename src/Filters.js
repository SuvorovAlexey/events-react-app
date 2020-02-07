//КОМПОНЕНТ ФИЛЬТРУЕТ ПО ИЗБРАННОМУ И ПО ЦЕНЕ

import React from 'react';


let Filters = (props) => {
  return(
    <div style={styles.div}>
      <div className='div-filter-item'>
        <p className='div-filter-p'>Сортировать по стоимости</p>
        <button onClick={props.sortByPriceExpensive} style={styles.button}>Сначала дорогие</button>
        <button onClick={props.sortByPriceCheap} style={styles.button}>Сначала дешевые</button>
      </div>
      <div className='div-filter-item'>
        <p className='div-filter-p'>Сортировать по формату мероприятия</p>
        <button onClick={props.filterByFest} style={styles.button}>Фестиваль</button>
        <button onClick={props.filterByMusic} style={styles.button}>Музыка</button>
        <button onClick={props.filterBySales} style={styles.button}>Распродажи</button>
        <button onClick={props.filterByFood} style={styles.button}>Еда</button>
      </div>
      <button onClick={props.showFavorite} style={styles.button2}>Избранное</button>
      <button onClick={props.getDefaultState} style={styles.button2}>Сбросить фильтры</button>

    </div>


  )
}

export default Filters;



//Добавим компоненту стили
let styles = {
  div: {
    border: '2px solid black',
    margin: '30px 50px',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    marginTop: '5px',
    padding: '4px 8px',
    border: 'none',
    display: 'block',
    borderRadius: '12px',
    background: 'white'
  },
  button2: {
    borderRadius: '12px',
    height: '40px',
    background: 'white',
    padding: '4px 8px',
    border: 'none'
  }
}
