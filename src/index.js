import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './utils/globalStyle';
import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
	<ThemeProvider theme={ theme } >
		<Fragment>
			<App />
			<GlobalStyle />
		</Fragment>	
	</ThemeProvider>
	, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
