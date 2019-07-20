import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
	max-width: 25%;
	flex-basis: 25%;
	padding: 0 7.5px;
	margin-bottom: 15px;
	position: relative;
`


const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
`

const Image = styled.img`
	width: 100%;
`
const ItemInfo = styled.div`
	padding: 10px;
`

const ItemName = styled.div`
	font-size: 15px;
	height: 38px;
	line-height: 16px;
	overflow: hidden;
`

const Label = styled.div`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 10px;
`


const EpisodeItem = ({ image, name, season, id, children }) => {
   
  return (
    <Column >
     <ImageWrapper>
      <Image 
      	src={ image !== null ? image.medium : '' } 
      	alt={ name } 
      />
     </ImageWrapper>
     <ItemInfo>
      <ItemName> { name }</ItemName>
      <Label> Season { season }</Label>
      { children }
     </ItemInfo> 
    </Column>
  )
}

export default EpisodeItem;