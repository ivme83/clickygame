import React, { Component } from "react";
import ImgBoard from "./components/ImgBoard";
import ImgCard from "./components/ImgCard";
import ScoreBoard from "./components/ScoreBoard";
import Header from "./components/Header";
import cards from './cardsBuild.json';
import "./App.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
// eslint-disable-next-line
const images = importAll(
  require.context("./components/imgs", false, /\.(png|jpe?g|svg)$/)
);

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0
  };

  searchForID = (objArr, id) => {
    for (var i = 0; i < objArr.length; i++) {
      // look for the entry with a matching `code` value
      if (objArr[i].id === id) {
        return i;
      }
    }
  };

  setToClicked = id => {
    let cards = this.state.cards;
    let index = this.searchForID(cards, id);

    if (cards[index].isClicked === 0) {
      cards[index].isClicked = 1;
      const score = this.state.score + 1;
      this.setState({ score: score });
    } else {
      if (this.state.score > this.state.topScore) {
        const topScore = this.state.score;
        const score = 0;

        this.setState({ score: score, topScore: topScore });
      } else {
        const score = 0;
        this.setState({ score: score });
      }

      cards.forEach(card => (card.isClicked = 0));
      this.setState({ cards: cards });
    }

    // this.randomize();
    cards.sort((a, b) => Math.random() - 0.5);
    this.setState({ cards });
  };

  randomize = () => {
    const cards = this.state.cards.sort((a, b) => Math.random() - 0.5);

    this.setState({ cards });
  };

  render() {
    return (

        <div className="main-grid">
        <ScoreBoard score={this.state.score} topScore={this.state.topScore} />
          <Header />
          <ImgBoard>
            {this.state.cards.map(card => (
              <ImgCard
                id={card.id}
                key={card.id + "_" + card.name}
                name={card.name}
                imgSrc={card.imgSrc}
                clck={card.isClicked}
                setToClicked={this.setToClicked}
              />
            ))}
          </ImgBoard>
        </div>
    );
  }
}

export default App;
