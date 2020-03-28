import React, { Component } from 'react';
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    /**
     * function which sets the count
     */
    toggleCount = () => {
        this.setState({ count: ++this.state.count });
    }

    /**
     * function to create the columns in the given row
     */
    returnSpanRow = (spanCount) => {
        let span = [];
        for (let i = 0; i < spanCount; i++) {
            span.push(<span className="column-border" />);
        }

        return (
            <div className="row-border">
                {span}
            </div>);
    }

    /**
     * function to create the total rows in the box
     */
    returnDivRow = (divCount, spanCount) => {
        let div = [];
        for (let i = 0; i < divCount; i++) {
            div.push(this.returnSpanRow(spanCount));
        }

        return div;
    }

    /**
     * function to make the desired box 
     */
    divMaker = () => {
        
        // base condition
        // if the count is zero return just a div
        if (!this.state.count)
            return (<div className="row-border"></div>);

        // get the divCount i.e no. of rows
        let divCount = parseInt(this.state.count / 2) + 1;

        // get the spanCount i.e no. of columns
        let spanCount = parseInt((this.state.count + 1) / 2) + 1;

        return this.returnDivRow(divCount, spanCount);
    }

    render() {
        return (
            <React.Fragment>
                <div className="black-border">
                    {this.divMaker()}
                </div>
                <button onClick={this.toggleCount} > Click --- {this.state.count}</button>
            </React.Fragment>
        );
    }
}

export default App;