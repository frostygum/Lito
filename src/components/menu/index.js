import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MenuContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--green);
  border-radius: var(--rounded);
  cursor: pointer;
  text-align: center;
  color: var(--dark);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  filter: ${props => props.active ? 'grayscale(0%)' : 'grayscale(70%)'};
`

const MenuToaster = styled.div`
  height: 2.5rem;
  padding: 0 0.8rem 0 0.8rem;
  background-color: var(--green);
  border-radius: var(--rounded);
  text-align: center;
  color: var(--dark);
  position: absolute;
  left: 7rem;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  font-weight: bold;
  white-space: nowrap;
  z-index: 100;
`

function Menu( props ) {
  let [isShown, setIsShown] = useState(false);

  return (
    <MenuWrapper>
      <MenuContainer
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        active={isShown}
        onClick={props.onClick}
      >
        <FontAwesomeIcon icon={props.icon} size='2x'/>
      </MenuContainer>
      {
        isShown && !props.disableToaster ?
        <MenuToaster>
          <span>{ props.title }</span>
        </MenuToaster>
      : 
        ''
      }
    </MenuWrapper>
  );
}

export default Menu;
