import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./card";
import {
  fetchContributors,
  startByBtn,
  openCard,
  resetOpenedCards,
  updateCardState,
  updateScore,
  countdown,
  sessionOn,
  sessionOff,
  gameSummary
} from "./../actions/";

class PlayGround extends Component {
  handleClick(name, index) {
    if (this.props.openedCards.length === 2) {
      setTimeout(() => {
        this.check();
      }, 750);
    } else {
      let card = {
        name,
        index
      };
      let cards = this.props.cards;
      let openedCards = this.props.openedCards;
      cards[index].close = false;
      openedCards.push(card);
      this.props.openCard(openedCards);
      this.setState({});
      if (this.props.openedCards.length === 2) {
        setTimeout(() => {
          this.check();
        }, 750);
      }
    }
  }

  check() {
    let cards = this.props.cards;

    if (
      this.props.openedCards[0].name === this.props.openedCards[1].name &&
      this.props.openedCards[0].index !== this.props.openedCards[1].index
    ) {
      cards[this.props.openedCards[0].index].complete = true;
      cards[this.props.openedCards[1].index].complete = true;
      this.props.updateScore();
    } else {
      cards[this.props.openedCards[0].index].close = true;
      cards[this.props.openedCards[1].index].close = true;
    }
    this.props.resetOpenedCards();
    this.props.updateCardState(cards);
  }
  restartGameBtn() {
    this.props.gameRestart();
  }
  startByBtn() {
    let cards = [];
    let firstShuffle = this.shuffle(this.props.contributors);
    let randomSix = firstShuffle.slice(0, 6);
    let duplicated = randomSix.concat(randomSix);
    let randomized = this.shuffle(duplicated);

    randomized.map((name, index) => {
      return cards.push({
        name,
        close: true,
        complete: false,
        fail: false
      });
    });
    this.props.sessionOn();
    this.props.startByBtn(cards);
    const countdownTimer = setInterval(() => {
      if (this.props.timer === 0) {
        this.props.sessionOff();
        this.props.gameSummary();
        clearInterval(countdownTimer);
      } else if (this.props.score === 600) {
        this.props.gameSummary();
        clearInterval(countdownTimer);
      } else {
        this.props.countdown();
      }
    }, 1000);
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  componentDidMount() {
    this.props.fetchContributors();
  }
  render() {
    return (
      <div>
        {this.props.session || this.props.summary ? (
          ""
        ) : (
          <button className="btn btn-success" onClick={() => this.startByBtn()}>
            Start
          </button>
        )}

        <div className="playground">
          {!this.props.summary ? (
            this.props.cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card.name}
                  click={
                    this.props.openedCards.length === 2
                      ? () => {
                          return null;
                        }
                      : () => {
                          this.handleClick(card.name, index);
                        }
                  }
                  close={card.close}
                  complete={card.complete}
                />
              );
            })
          ) : (
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Game Ended</h1>
                <p className="lead">Score:{this.props.score}</p>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block mt-5"
                  onClick={() => console.log("SORRY, FUNCTION NOT ADDED YET.")}
                >
                  Start a new game
                </button>
              </div>
            </div>
          )}
        </div>
        {this.props.session ? (
          <div className="row mt-5">
            <div className="col-12 col-md-6">
              <h3>Score: {this.props.score}</h3>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="float-md-right float-left">
                Time: {this.props.timer} seconds
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contributors: state.contributors,
    cards: state.status.data,
    openedCards: state.openedCards.openedCards,
    updateCards: state.updateCardState,
    score: state.score.score,
    timer: state.countdown.countdown,
    session: state.session.session,
    summary: state.summary.summary
  };
};
export default connect(
  mapStateToProps,
  {
    fetchContributors,
    startByBtn,
    openCard,
    resetOpenedCards,
    updateCardState,
    updateScore,
    countdown,
    sessionOn,
    sessionOff,
    gameSummary
  }
)(PlayGround);
