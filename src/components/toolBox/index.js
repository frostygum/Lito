import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const ToolBoxWrapper = styled.div`
  min-height: 2rem;
  position: absolute;
  left: ${props => props.position === 'right' ? 'auto' : '4rem' };
  right: ${props => props.position === 'right' ? '4rem' : 'auto' };
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  .toolBoxContainer {
    min-height: 2rem;
    width: 6rem;
    background-color: var(--dark);
    position: relative;
    border-radius: var(--rounded);
    box-shadow: var(--shadow);
    padding: 1rem;
    display: flex;

    .left {
      display: grid;
      grid-row-gap: 0.8rem;
    }

    .right {
      flex-grow: 1;
      margin-left: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: visibility 0s, opacity 0.5s linear;
      overflow: hidden;
    }

    .right.active {
      visibility: visible;
      opacity: 1;
    }

    .right.inActive {
      width: 0;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 100ms, opacity 0.5s linear;
    }
  }
`;

function ToolBox( props ) {

  return (
    <ToolBoxWrapper
      position={props.position}
    >
      <motion.div
        className='toolBoxContainer'
        initial={{width: '4rem'}}
        animate={{width: props.active ? '30rem' : '4rem'}}
        transition={{duration: 0.3}}
        onMouseLeave={() => props.onMouseLeave(false)}
      >
        <div className='left'>
          {
            props.menuList
          }  
        </div>
        <div className={'right ' + (props.active ? 'active' : 'inActive')}>
          {
            props.toolBox
          }
        </div>
      </motion.div>
    </ToolBoxWrapper>
  );
}

export default ToolBox;
