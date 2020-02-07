import React from 'react';
import './App.css';
import Filters from './Filters'
import EventsItem from './EventsItem'

class App extends React.Component {

  constructor(){
    super();

    //исходное состояние
    this.state = {
      events: [
        {id: 1, title: 'Фестиваль красок', description: 'Фестиваль красок обещает стать одним из интереснейших события грядущего лета. Билеты скоро в продаже' , price: '2000', available: 3212, categories: "festial", favorites: false},
        {id: 2, title: 'Выступление Lana Del Rey', description: 'Знаменитая певица исполнит все хиты, а также песни с нового альбома' , price: '4000', available: 56, categories: "music", favorites: false},
        {id: 3, title: 'Распродажа в Apple', description: 'Грандиозная распродажа техника Apple! Скидки до 90%!' , price: '0', available: 'вход свободный', categories: "sales", favorites: false},
        {id: 4, title: 'Открытие нового ресторана Ginza', description: 'Состоится градиозное открытие нового ресторана, каждому посетителю - любой напиток в подарок', price: '0', available: 'вход свободный', categories: "food", favorites: false},
        {id: 5, title: 'Открытие фонтанов в Петергофе', description: 'Успейте купить билет на красочное празднование открытия фонтанов. Билеты доступны для покупки', price: '1000', available: 3300, categories: "festial", favorites: false},
        {id: 6, title: 'Праздник еды в Новой Голландии', description: 'На территории Новой Голландии состоится фетиваль еды по принципу "Шведский Стол"', price: '2500', available: 291, categories: "food", favorites: false},
        {id: 7, title: 'Hans Zimmer с оркестром', description: 'Знаменитый немецкий кинокомпозитор впервые выступит в Петербурге на самых крупных площадках города', price: '5000', available: 25, categories: "music", favorites: false}
      ]
    }
  }



  //Пропишем основные функции
    //Получить изначальный стейт
    getDefaultState() {
      this.state = {
        events: [
          {id: 1, title: 'Фестиваль красок', description: 'Фестиваль красок обещает стать одним из интереснейших события грядущего лета. Билеты скоро в продаже' , price: '2000', available: false, categories: "festial", favorites: false},
          {id: 2, title: 'Выступление Lana Del Rey', description: 'Знаменитая певица исполнит все хиты, а также песни с нового альбома' , price: '4000', available: true, categories: "music", favorites: false},
          {id: 3, title: 'Распродажа в Apple', description: 'Грандиозная распродажа техника Apple! Скидки до 90%!' , price: '0', available: true, categories: "sales", favorites: false},
          {id: 4, title: 'Открытие нового ресторана Ginza', description: 'Состоится градиозное открытие нового ресторана, каждому посетителю - любой напиток в подарок', price: '0', available: true, categories: "food", favorites: false},
          {id: 5, title: 'Открытие фонтанов в Петергофе', description: 'Успейте купить билет на красочное празднование открытия фонтанов. Билеты доступны для покупки', price: '1000', available: false, categories: "festial", favorites: false},
          {id: 6, title: 'Праздник еды в Новой Голландии', description: 'На территории Новой Голландии состоится фетиваль еды по принципу "Шведский Стол"', price: '2500', available: true, categories: "food", favorites: false},
          {id: 7, title: 'Hans Zimmer с оркестром', description: 'Знаменитый немецкий кинокомпозитор впервые выступит в Петербурге на самых крупных площадках города', price: '5000', available: true, categories: "music", favorites: false}
        ]
      }
      this.setState( this.state )
    }

    //Функция добавления в избранное
    addToFavorite(key) {
      let events = this.state.events

      if (events[key].favorites === false) {
        events[key].favorites = true
      }
      else if (events[key].favorites === true) {
        events[key].favorites = false
      }
      console.log(events[key].favorites)

      this.setState( {events} )
    }


    //Функция показа избранных
    showFavorite() {
      let events = this.state.events
      for (var i = 0; i < events.length; i) {
        if (events[i].favorites === false) {
          events.splice(i, 1)
        }
        else {
          i++
        }
      }
      this.setState( {events} )
    }

    //Функции сортировки по цене
      //(дорогие-дешевые)
      sortByPriceExpensive() {
        let events = this.state.events
        events.sort((a, b) => a.price < b.price ? 1 : -1);

        this.setState( {events} )
        }
      //(дешевые-дорогие)
      sortByPriceCheap() {
        let events = this.state.events
        events.sort((a, b) => b.price < a.price ? 1 : -1);
        this.setState( {events} )
        }

    //Функция выбора по типу мероприятия
      //Фестиваль
      filterByFest() {
        let events = this.getDefaultState() //возвращаем стейт в изначальное состояние, далее фильтруем
        events = this.state.events
        for (var i = 0; i < events.length; i) {
          console.log(events[i].categories)
          if (events[i].categories !== 'festial') {
            events.splice(i, 1)
          }
          else {
            i++
          }
        }
        this.setState( {events} )
      }
      //Музыка
      filterByMusic() {
        let events = this.getDefaultState() //возвращаем стейт в изначальное состояние, далее фильтруем
        events = this.state.events
        for (var i = 0; i < events.length; i) {
          console.log(events[i].categories)
          if (events[i].categories !== 'music') {
            events.splice(i, 1)
          }
          else {
            i++
          }
        }
        this.setState( {events} )
      }

      //Распродажи
      filterBySales() {
        let events = this.getDefaultState() //возвращаем стейт в изначальное состояние, далее фильтруем
        events = this.state.events
        for (var i = 0; i < events.length; i) {
          console.log(events[i].categories)
          if (events[i].categories !== 'sales') {
            events.splice(i, 1)
          }
          else {
            i++
          }
        }
        this.setState( {events} )
      }
      //Музыка
      filterByFood() {
        let events = this.getDefaultState() //возвращаем стейт в изначальное состояние, далее фильтруем
        events = this.state.events
        for (var i = 0; i < events.length; i) {
          console.log(events[i].categories)
          if (events[i].categories !== 'food') {
            events.splice(i, 1)
          }
          else {
            i++
          }
        }
        this.setState( {events} )
      }


  //рендерим
  render(){
    return(
      <div className='wrapper'>
        <h1>Главные события Санкт-Петербурга</h1>
        <Filters
        sortByPriceExpensive={this.sortByPriceExpensive.bind(this)}
        sortByPriceCheap={this.sortByPriceCheap.bind(this)}
        showFavorite={this.showFavorite.bind(this)}
        getDefaultState={this.getDefaultState.bind(this)}
        filterByFest={this.filterByFest.bind(this)}
        filterByMusic={this.filterByMusic.bind(this)}
        filterBySales={this.filterBySales.bind(this)}
        filterByFood={this.filterByFood.bind(this)}
        />

        {this.state.events.map((component, i) => {
          return(
            <EventsItem
              key={i}
              title={component.title}
              description={component.description}
              price={component.price}
              favorites={component.favorites}
              available={component.available}
              addToFavorite={this.addToFavorite.bind(this, i)}
            />
          )
        })}

      </div>
    )
  }

}

export default App;
