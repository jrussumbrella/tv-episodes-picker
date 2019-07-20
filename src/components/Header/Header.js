import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../../utils/history';
import { FiHeart } from "react-icons/fi";

const Navbar = styled.div`
	width: 100%;
	height: 77px;
	background-color: #fff;
	border-bottom: 1px solid rgba(0,0,0,.0975);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
`

const NavContainer = styled.div`
	max-width: 1200px;
	height: 100%;
	display: flex;
	align-items: center;
	margin: 0 auto;
`

const NavItem = styled.div`
	position: relative:	
`

const NavLink = styled(Link)`
   color: ${ props => props.theme.colors.colorDark }
   cursor: pointer;
`

const NavSpacer = styled.div`
	flex: 1;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 35px;
  padding: 0 15px;
`

const Input = styled.input`
  height: 100%;
  padding: 0 15px;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.colorLightGray };
  font-size: 15px;
  width: 200px;

  &:focus {
    outline: none;
  }
`



const Header = () => {
    
  const  state  = useContext(StoreContext);	
  const [search, setSearch] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
    history.push(`${process.env.PUBLIC_URL}/search/${search}`);

  }


  return (
    <Navbar>
     <NavContainer>
     <NavItem> 
     	<NavLink to={`${process.env.PUBLIC_URL}/`}> Ric and Morty Show </NavLink>
     </NavItem>
    
      <NavSpacer>
      <Form onSubmit={ handleSearch }>
        <Input 
          type="text" 
          placeholder="Search Episode here"
          onChange={ (e) => setSearch(e.target.value) }
          value={search}
        />
      </Form>         
      </NavSpacer>
      <NavItem>
      	<NavLink  to={`${process.env.PUBLIC_URL}/favourites`}> <FiHeart style={{ verticalAlign: "middle", height: "24px", width: "24px"}} /> ({ state.favourites.length }) </NavLink>
      </NavItem>
     </NavContainer>	
    </Navbar>
  )
}

export default Header;