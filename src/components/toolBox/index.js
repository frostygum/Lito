import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  .toolBoxWrapper {
    min-height: 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }

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

  .maximizeButton {
    height: 4rem;
    width: 4rem;
    border-radius: var(--rounded);
    background-color: var(--dark);
    position: absolute;
    bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0.8rem;
    color: var(--green);
  }
`;

function ToolBox( props ) {
  return (
    <Wrapper
      position={props.position}
    >
      <motion.div
        className={'toolBoxWrapper'}
        initial={{left: '4rem', right: 'auto'}}
        animate={
          props.position === 'right' ?
            {left: 'auto', right: '4rem'}
          :
            {left: '4rem', right: 'auto'}
        }
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        <motion.div
          className='toolBoxContainer'
          initial={{width: '4rem', scale: 1, y: 0}}
          animate={{
            width: props.active ? '30rem' : '4rem', 
            scale: props.isMinimize ? 0 : 1, 
            y: props.isMinimize ? '40vh' : 0
          }}
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

        <motion.div
          className='maximizeButton'
          initial={{scale: 0}}
          animate={{scale: props.isMinimize ? 1 : 0}}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20
          }}
          onClick={() => props.setIsMinimize(false)}
        >
          <FontAwesomeIcon icon={faAngleUp} size='2x' />
        </motion.div>
      </motion.div>
    </Wrapper>
  );
}

export default ToolBox;
