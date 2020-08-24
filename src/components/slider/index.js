import React, { useState } from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  padding: 0.3rem 0.8rem;
  display: flex;
`;

const SliderInput = styled.div`
  width: 100%;

  .sliderTitle {
    color: var(--light);
    font-weight: bold;
    margin: 0;
  }

  input[type=range] {
    height: 25px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background-color: transparent;
  }
  
  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background-color: var(--dark-green);
    border-radius: 1rem;
  }

  input[type=range]::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 25px;
    border: 0;
    background-color: var(--green);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.3rem;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background-color: var(--dark-green);
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background-color: var(--dark-green);
    border-radius: 1rem;
  }

  input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 25px;
    border: 0;
    background-color: var(--green);
    cursor: pointer;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background: var(--dark-green);
    border-radius: 1rem;
  }

  input[type=range]::-ms-fill-upper {
    background: var(--dark-green);
    border-radius: 1rem;
  }

  input[type=range]::-ms-thumb {
    margin-top: 1px;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    border: 0;
    background: var(--green);
    cursor: pointer;
  }

  input[type=range]:focus::-ms-fill-lower {
    background: #2497E3;
  }

  input[type=range]:focus::-ms-fill-upper {
    background: #2497E3;
  }
`;

const SliderPreview = styled.div`
  color: var(--light-green);
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Slider = (props) => {
  let [value, setValue] = useState(0);

  const handleOnchange = (e) => {
    let value = e.target.value;

    if(props.setValue) {
      props.setValue(value);
    }
    setValue(value);
  }

  return (
    <SliderWrapper>
      <SliderInput>
        <h4 className="sliderTitle">{props.title}</h4>
        <input 
          id='typeinp'
          type='range' 
          min={props.min ? props.min : 0}
          max={props.max ? props.max : 10} 
          step={props.step ? props.step : 0.5}
          value={props.value ? props.value : value}
          onChange={handleOnchange}
        />
      </SliderInput>
      <SliderPreview>
        {props.value ? props.value : value}
      </SliderPreview>
    </SliderWrapper>
  );
}

export default Slider;
