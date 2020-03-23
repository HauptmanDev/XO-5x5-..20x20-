import React, {Component} from "react";
import './App.css';
import Game from "./Game/Game";
import 'antd/es/date-picker/style/css'; // for css
import 'antd/dist/antd.css'; // for css

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Game />
            </div>
        );
    }
}

export default App;