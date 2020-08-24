import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  background-color: ${props => props.color ? 'rgb(' + props.color + ')' : 'var(--light)'};
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
`

function BgChanger( props ) {
  return (
    <Background 
      color={props.color}
      onClick={() => props.onClick(false)}  
    />
  );
}

export default BgChanger;
