import './App.css';
import {Header} from './header/header'
import {PokemonSprint} from './pokemon-sprint/pokemon-sprint'
import {AnwserInput} from './anwser/anwser-input'
import {Result} from './resut/result'

 function  App() {

  return (
    <div className="App">
      <div style={{display:"flex", flexDirection:"column", alignItems: 'center  '}}>
      <Header/>
      <PokemonSprint/>
      <AnwserInput/>

      <Result/>
      </div>
    </div>
  );
}

export default App;
