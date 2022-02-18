import './App.css';
import {Header} from './header/header';
import {AnwserInput} from './anwser/anwser-input';
import {Result} from './resut/result';
import {CavaleirosDoZodiacoSprint} from "./cavaleiros-do-zodiaco/cavaleiros-do-zodiaco-sprint";

function App() {

    return (
        <div className="App">
            <div>
                <div style={{display: "flex", flexDirection: "column", alignItems: 'center  '}}>
                    <Header/>
                    <CavaleirosDoZodiacoSprint/>
                    <AnwserInput/>

                    <Result/>
                </div>
            </div>
        </div>
    );
}

export default App;
