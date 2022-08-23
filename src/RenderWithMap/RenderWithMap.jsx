import React, { Component } from "react";
import CardItem from "./CardItem";
export default class RenderWithMap extends Component {
  state = {
    phone: [
      {
        name: "Wisoky",
        img: "http://loremflickr.com/640/480/nature",
        price: "454.00",
        id: "1",
      },
      {
        name: "Gleason",
        img: "http://loremflickr.com/640/480/business",
        price: "942.00",
        id: "2",
      },
      {
        name: "O'Reilly",
        img: "http://loremflickr.com/640/480/technics",
        price: "485.00",
        id: "3",
      },
      {
        name: "Huels",
        img: "http://loremflickr.com/640/480/nature",
        price: "347.00",
        id: "4",
      },
      {
        name: "King",
        img: "http://loremflickr.com/640/480/city",
        price: "828.00",
        id: "5",
      },
      {
        name: "McDermott",
        img: "http://loremflickr.com/640/480/sports",
        price: "839.00",
        id: "6",
      },
      {
        name: "Bernier",
        img: "http://loremflickr.com/640/480/transport",
        price: "543.00",
        id: "7",
      },
      {
        name: "Wiegand",
        img: "http://loremflickr.com/640/480/nightlife",
        price: "684.00",
        id: "8",
      },
      {
        name: "Fisher",
        img: "http://loremflickr.com/640/480/city",
        price: "357.00",
        id: "9",
      },
      {
        name: "Keebler",
        img: "http://loremflickr.com/640/480/city",
        price: "446.00",
        id: "10",
      },
      {
        name: "Kulas",
        img: "http://loremflickr.com/640/480/city",
        price: "225.00",
        id: "11",
      },
      {
        name: "Beahan",
        img: "http://loremflickr.com/640/480/food",
        price: "63.00",
        id: "12",
      },
      {
        name: "Konopelski",
        img: "http://loremflickr.com/640/480/business",
        price: "344.00",
        id: "13",
      },
      {
        name: "Schaefer",
        img: "http://loremflickr.com/640/480/food",
        price: "376.00",
        id: "14",
      },
      {
        name: "Kuphal",
        img: "http://loremflickr.com/640/480/fashion",
        price: "742.00",
        id: "15",
      },
      {
        name: "Reilly",
        img: "http://loremflickr.com/640/480/abstract",
        price: "453.00",
        id: "16",
      },
      {
        name: "Will",
        img: "http://loremflickr.com/640/480/fashion",
        price: "669.00",
        id: "17",
      },
      {
        name: "Kiehn",
        img: "http://loremflickr.com/640/480/sports",
        price: "786.00",
        id: "18",
      },
      {
        name: "Deckow",
        img: "http://loremflickr.com/640/480/transport",
        price: "432.00",
        id: "19",
      },
      {
        name: "Stokes",
        img: "http://loremflickr.com/640/480/transport",
        price: "239.00",
        id: "20",
      },
      {
        name: "Effertz",
        img: "http://loremflickr.com/640/480/animals",
        price: "498.00",
        id: "21",
      },
      {
        name: "Jast",
        img: "http://loremflickr.com/640/480/animals",
        price: "788.00",
        id: "22",
      },
      {
        name: "Kulas",
        img: "http://loremflickr.com/640/480/transport",
        price: "645.00",
        id: "23",
      },
      {
        name: "Kris",
        img: "http://loremflickr.com/640/480/people",
        price: "12.00",
        id: "24",
      },
      {
        name: "Daugherty",
        img: "http://loremflickr.com/640/480/nightlife",
        price: "391.00",
        id: "25",
      },
      {
        name: "Hoppe",
        img: "http://loremflickr.com/640/480/fashion",
        price: "909.00",
        id: "26",
      },
      {
        name: "Rau",
        img: "http://loremflickr.com/640/480/city",
        price: "340.00",
        id: "27",
      },
      {
        name: "Ratke",
        img: "http://loremflickr.com/640/480/nightlife",
        price: "881.00",
        id: "28",
      },
      {
        name: "Yundt",
        img: "http://loremflickr.com/640/480/cats",
        price: "642.00",
        id: "29",
      },
    ],
  };

  render() {
    return (
      <div className="container container-fluid">
        <p>RenderWithMap</p>
        <div className="row">
          {this.state.phone.map((item, idx) => {
            return (
              <CardItem key={idx.toString() + item.id} item={item}></CardItem>
            );
          })}
        </div>
      </div>
    );
  }
}
