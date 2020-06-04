import React, { Component } from "react";
import "./SearchBar.css";
import CardComponent from "./CardComponent";

class SearchBar extends Component {
  state = {
    fetchedData: [],
    Loading: false,
    search_query: "",
  };

  handleFetch = () => {
    let APP_ID = "b5a7a953";
    let APP_KEY = "6e30f3f72eb11a65c8dbbcdf41570156";
    fetch(
      `https://api.edamam.com/search?q=${this.state.search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            fetchedData: data.hits,
            Loading: true,
          },
          () => {
            console.log(this.state.fetchedData);
          }
        );
      });
  };

  // Reset = () => {
  //   this.setState({ fetchedData: [], search_query: "", Loading: false });
  // };
  updateValue = (e) => {
    const s = e.target.value;
    console.log(s);
    this.setState({ search_query: s });
  };

  searchStart = () => {
    this.handleFetch();
  };

  render() {
    const { fetchedData, Loading, search_query } = this.state;
    let card;
    if (Loading) {
      card = fetchedData.map((s) => (
        <CardComponent
          title={s.recipe.label}
          image={s.recipe.image}
          calories={s.recipe.calories}
        />
      ));
    }
    return (
      <div>
        <input
          value={search_query}
          type="text"
          className="search-bar"
          onChange={this.updateValue}
        />
        <button
          type="button"
          className="search-button"
          onClick={this.searchStart}
        >
          Search
        </button>
        <div className="cards">{card}</div>
        {/* {this.Reset} */}
      </div>
    );
  }
}

export default SearchBar;
