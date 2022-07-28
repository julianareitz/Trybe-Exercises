// import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super();
// // o bind diz ao JS que essa função está ligada ao this, já que sem essa referência, o JS não consegue enxergar a função dentro do escopo de classe.
//     this.handleButtonOne = this.handleButtonOne.bind(this);
//     this.handleButtonTwo = this.handleButtonTwo.bind(this);
//     this.handleButtonThree = this.handleButtonThree.bind(this);

//     this.state = {
//       clicksBtnOne: 0,
//       clicksBtnTwo: 0,
//       clicksBtnThree: 0,
//     };
//   }

//   handleButtonOne() {
//     this.setState((previousState) => ({
//       clicksBtnOne: previousState.clicksBtnOne + 1,
//     }));
//   }

//   handleButtonTwo() {
//     this.setState((previousState) => ({
//       clicksBtnTwo: previousState.clicksBtnTwo + 1,
//     }));
//   }

//   handleButtonThree() {
//     // A única coisa diferente é a desconstrução.
//     // Apenas um método diferente de fazer a mesma coisa
//     // do que foi feito nas funções anteriores.
//     this.setState(({ clicksBtnThree }) => ({
//       clicksBtnThree: clicksBtnThree + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={ this.handleButtonOne }>Buton One | Count : {this.state.clicksBtnOne}</button>
//         <button onClick={ this.handleButtonTwo }>Buton Two | Count : {this.state.clicksBtnTwo}</button>
//         <button onClick={ this.handleButtonThree }>Buton Three | Count : {this.state.clicksBtnThree}</button>
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
// Se no handleButton tiver uma arrow function, não precisa usar o bind
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
    });
  }

  handleButtonTwo() {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
    });
  }

  handleButtonThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }), () => {
      // Aqui imprimimos a cor no console após o setState atualizar
      // a quantidade de clicks no botão
      console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
          onClick={ this.handleButtonOne }
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = { clicksBtnOne }
        </button>
        <button
          onClick={ this.handleButtonTwo }
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = { clicksBtnTwo }
        </button>
        <button
          onClick={ this.handleButtonThree }
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          Botão 3 | Count = { clicksBtnThree }
        </button>
      </div>
    );
  }
}

export default App;