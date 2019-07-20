import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	display: inline-block;
	padding: 12px 30px;
	font-size: 15px;
	cursor: pointer;
	background-color: ${props => props.primary ? 'var(--color-primary)' : '#fff' };
	border-radius: 4px;
	outline: none;
	text-decoration: none;
	color: ${props => props.primary ? 'var(--color-white)' : 'var(--color-dark)' };
	border: 1px solid transparent;

	&:hover {
		background-color: ${props => props.primary ? props.theme.colors.colorPrimaryDark : ''}
	}
`

const index = ({text, primary}) => {
  return (
    <Button 
    	primary={ primary ? 1 : 0 } 
    >{text}</Button>
  )
}

export default index;