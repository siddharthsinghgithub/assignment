import React from 'react';
import App from './App';

const initialState = {
	count: 0
}

export const CountContext = React.createContext();

const actions = {
	SET_COUNT: "SET_COUNT",
	RESET: "RESET_COUNT"
}

const reducer = (state, action) => {

	switch (action.type) {
		case actions.SET_COUNT:
			return { ...state, count: action.value };
		case actions.RESET:
			return { ...state, ...initialState }
		default:
			return state;
	}

}

let Provider = ({ children }) => {

	const [state, dispatch] = React.useReducer(reducer, initialState);

	const value = {
		count: state.count,
		setCount: value => {
			dispatch({ type: actions.SET_COUNT, value })
		},
		reset: () => {
			dispatch({ type: actions.RESET })
		}
	};


	return (
		<CountContext.Provider value={value}>
			{children}
		</CountContext.Provider>
	)

}

export const Context = () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
}