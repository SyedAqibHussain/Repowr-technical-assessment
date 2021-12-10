import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Suspense fallback='...'>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Suspense>
	</Provider>,
	document.querySelector('#root')
);
