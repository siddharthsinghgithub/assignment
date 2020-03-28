import React, { Component } from 'react';
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    toggleCount = () => {
        this.setState({ count: ++this.state.count });
    }

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

    returnDivRow = (divCount, spanCount) => {
        let div = [];
        for (let i = 0; i < divCount; i++) {
            div.push(this.returnSpanRow(spanCount));
        }

        return div;
    }

    divMaker = () => {
        if (!this.state.count)
            return (<div className="row-border"></div>);

        let divCount = parseInt(this.state.count / 2) + 1;
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