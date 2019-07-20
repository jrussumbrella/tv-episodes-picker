import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
 	${normalize}

	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
	
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		--color-primary: ${props => props.theme.colors.colorPrimary};
		--color-white: ${props => props.theme.colors.colorWhite};		
		--color-dark: ${props => props.theme.colors.colorDark};		
	}

	body {
		background-color: #fafafa;
		line-height: 1.6;
		font-family: 'Roboto', sans-serif;
	}

	a {
		text-decoration: none;
		color: ${ props => props.theme.colors.colorDark }
	}
	
`