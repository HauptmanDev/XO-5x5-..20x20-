import React, {Component} from "react";
import './Parameters.css'
import 'antd/dist/antd.css';
import {Button, Input} from 'antd';

class Parameters extends Component {
    changeSizeBoard = (e) => {
        this.props.changeSizeBoard(e.currentTarget.value)
    };

    render() {
        return (
            <div className="Game-board-size">
                <div className='input'>
                    <Input step='1' size='default' type="number" onChange={this.changeSizeBoard} disabled={this.props.disabledSubmit}
                           value={this.props.sizeBoard}/>
                </div>
                <div className='button'>
                    <Button onClick={this.props.submitBoard} disabled={this.props.disabledSubmit}
                            size='default'>Submit</Button>
                    <Button onClick={this.props.resetBoard} size='default'> Reset </Button>
                </div>
            </div>
        );
    }
}

export default Parameters;