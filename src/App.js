import React, { useState } from 'react';
import "./App.css";
import { CountContext } from './Context'

const GridBox = () => {

    // const [count, setCount] = useState(0);

    const { count, setCount, reset } = React.useContext(CountContext);
    // console.log(count, setCount)
    /** function which sets the count */

    /** function to create the columns in the given row */
    let returnSpanRow = spanCount => {

        let span = [];
        for (let i = 0; i < spanCount; i++) {
            span.push(<span className="column-border" />);
        }

        return (
            <div className="row-border">
                {span}
            </div>
        );
    }

    /** function to create the total rows in the box */
    let returnDivRow = (divCount, spanCount) => {

        let div = [];
        for (let i = 0; i < divCount; i++) {
            div.push(returnSpanRow(spanCount));
        }

        return div;
    }

    /** function to make the desired box */
    let divMaker = () => {

        // base condition
        // if the count is zero return just a div
        if (!count)
            return (<div className="row-border"></div>);

        // get the divCount i.e no. of rows
        let divCount = parseInt(count / 2) + 1;

        // get the spanCount i.e no. of columns
        let spanCount = parseInt((count + 1) / 2) + 1;

        return returnDivRow(divCount, spanCount);
    }

    return (
        <React.Fragment>
            <div className="black-border">
                {divMaker()}
            </div>
            <br />
            <div className="buttons">
                <span>
                    <button onClick={() => { setCount(count + 1); }} > CLICK ---  {count}</button>
                </span>
                <span>
                    <button onClick={() => { reset(); }}> RESET </button>
                </span>
            </div>

        </React.Fragment>
    );
}

const App = () => {
    return (

        <div className=".center">
            <div className="title">
                <h2> Dynamic GridBox using Flex </h2>
            </div>
            <br />
            <GridBox />
        </div>
    )
}

export default App;