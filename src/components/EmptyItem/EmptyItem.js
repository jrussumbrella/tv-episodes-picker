import React from 'react';
import styled from 'styled-components';

const Empty = styled.div`
  width: 100%;
  text-align: center;	
  padding: 100px;	
`

const Msg = styled.div`
	font-size: 20px;
`

const EmptyItem = ({msg}) => {
  return (
    <Empty>
    	<Msg>{msg} </Msg>
    </Empty>
  )
}

export default EmptyItem;