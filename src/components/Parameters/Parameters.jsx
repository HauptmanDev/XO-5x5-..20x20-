import React, {Component} from "react";
import './Parameters.css'

class Parameters extends Component {
    changeSizeBoard = (e) => {
        this.props.changeSizeBoard(e.currentTarget.value)
    };

    render() {
        return (
            <div className="Game-board-size">
                <input type="number" onChange={this.changeSizeBoard} disabled={this.props.disabledSubmit}
                       value={this.props.sizeBoard}/>
                <button onClick={this.props.submitBoard} disabled={this.props.disabledSubmit}>Submit</button>
                <button onClick={this.props.resetBoard}>Reset</button>
            </div>
        );
    }
}

export default Parameters;