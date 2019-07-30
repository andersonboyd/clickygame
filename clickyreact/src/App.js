import React, { Component }from 'react';
import BoxCard from "./components/BoxCard";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import chars from "./chars.json";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Header />
        <Wrapper>
          {
            chars.map(char =>
              <BoxCard 
                key={char.id}
                image={char.image}
                name={char.name}
                isclicked={char.isClicked}
              />
            )
          }
        </Wrapper>
      </div>
    );
  }

}

export default App;
