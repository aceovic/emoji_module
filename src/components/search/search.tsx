
import React, { Component } from "react"



export default class Search extends Component {
    state = { 
        text:"",
    };
    
    onChange =(e: React.FormEvent<HTMLInputElement>):void => {
        this.setState({text: e.currentTarget.value} )
        console.log(e.currentTarget.value);
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onChange} />
                <h2>Hey</h2>
            </div>

        )
    }
}
