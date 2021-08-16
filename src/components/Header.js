import React from 'react';
import { ThemeProvider as MultiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import theme from '../styles/theme';

export const Header = props => {
	return (
		<MultiThemeProvider theme={theme}>
			<AppBar position="static">
				<Toolbar>
					{props.title ? <h1>{props.title}</h1> : <h1>Neurobody</h1>}
					{props.content ? props.content : null}
				</Toolbar>
			</AppBar>
		</MultiThemeProvider>
	);
};
