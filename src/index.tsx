import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from "./store/store";
import {BrowserRouter} from "react-router";

interface State {
	store: Store
}

const root = document.getElementById('root') as HTMLElement

const store = new Store()
export const StoreContext = React.createContext<State>({store})

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<StoreContext.Provider value={{store}}>
			<App/>
		</StoreContext.Provider>
	</BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
