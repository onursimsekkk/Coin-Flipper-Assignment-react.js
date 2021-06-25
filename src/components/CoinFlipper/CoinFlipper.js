import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      flipCount: 0,
      turaCount: 0,
      yaziCount: 0
    };
  }

  randomNumber = () => {
    return Math.floor(Math.random() * 2);
  }; 

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    if(this.randomNumber() == 1) {
      this.setState({ flipping: true });
      this.setState({ flipCount: this.state.flipCount + 1 });
      this.setState({ yaziCount: this.state.yaziCount + 1 });
      this.setState({ side: "yazi"});
      console.log(this.randomNumber())
    } else {
      this.setState({ flipping: true });
      this.setState({ flipCount: this.state.flipCount + 1 });
      this.setState({ turaCount: this.state.turaCount + 1 });
      this.setState({ side: "tura"});
      console.log(this.randomNumber())
    }
    
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false}), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.flipCount} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü tura
          <strong> {this.state.yaziCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
