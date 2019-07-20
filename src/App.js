import React from 'react';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Favourites from './containers/Favourites/Favourites';
import Search from './containers/Search/Search';
import { Provider } from './store';
import styled from 'styled-components';
import {  Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

const Main = styled.main`
	padding-top: 100px;
`



function App() {
  return (
    <Provider>
       <Router history={history}>
 		<Header />
 		 <Main>
 		<Switch>
		  <Route
		    exact
		    path={`${process.env.PUBLIC_URL}/`}
		    component = { Home }
		    />    
		  <Route
		    exact
		    path={`${process.env.PUBLIC_URL}/favourites`}
		    component = { Favourites }
		    />
		  <Route
		    exact
		    path={`${process.env.PUBLIC_URL}/search/:keyword`}
		    component = { Search }
		    /> 		     		       
	    </Switch>
	    </Main>   
       </Router>
    </Provider>
  );
}

export default App;
