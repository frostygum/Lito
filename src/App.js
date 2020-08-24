import React, { useState } from 'react';
import { 
  BgChanger, 
  ToolBox, 
  Menu, 
  Slider 
} from './components';
import { 
  FullScreen, 
  useFullScreenHandle 
} from "react-full-screen";
import { 
  faPalette, 
  faExpand, 
  faWindowMinimize, 
  faArrowAltCircleRight, 
  faCompress,
  faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  const handle = useFullScreenHandle();
  let [isFullscreen, setIsFullscreen] = useState(false);
  let [isPanelActive, setIsPanelActive] = useState(false);
  let [bgColor, setBgColor] = useState('200, 200, 200');
  let [colorArr, setColorArr] = useState([0, 0, 0]);
  let [panelPosition, setPanelPosition] = useState('left');

  const menuList = [
    {
      icon: faPalette,
      title: 'Change color',
      onClick: () => {
        setIsPanelActive(!isPanelActive);
      }
    },
    {
      icon: isFullscreen ? faCompress : faExpand,
      title: isFullscreen ? 'Exit Fullscreen' : 'Fullscreen',
      onClick: () => {
        if(!isFullscreen) {
          handle.enter();
          setIsFullscreen(true);
        }
        else {
          handle.exit();
          setIsFullscreen(false);
        }
      }
    },
    {
      icon: faWindowMinimize,
      title: 'Minimize panel'
    },
    {
      icon: panelPosition === 'right' ? faArrowAltCircleLeft : faArrowAltCircleRight,
      title: panelPosition === 'right' ? 'Snap to right' : 'Snap to left',
      onClick: () => {
        if(panelPosition === 'right') {
          setPanelPosition('left');
        }
        else {
          setPanelPosition('right');
        }
      }
    },
  ];

  let menus = menuList.map((menu, menuKey) => {
    return(
      <Menu 
        key={menuKey}
        icon={menu.icon} 
        title={menu.title} 
        onClick={menu.onClick ? menu.onClick : null}
        disableToaster={isPanelActive}
        toasterPosition={
          panelPosition === 'right' ? 'left' : 'right' 
        }
      />
    )
  });

  const handleChangeValue = (value, idx) => {
    let arr = [...colorArr];
    arr[idx] = value;
    setColorArr(arr);
    setBgColor(colorArr.join());
  }

  return (
    <FullScreen handle={handle}>
      <BgChanger color={bgColor} onClick={setIsPanelActive}/>
      <ToolBox 
        active={isPanelActive} 
        menuList={menus}
        onMouseLeave={setIsPanelActive}
        position={panelPosition}
        toolBox={
          <>
            <Slider 
              min='0'
              max='255'
              step='1'
              title='Red'
              value={colorArr[0]}
              setValue={(value) => handleChangeValue(value, 0)}
            />
            <Slider 
              min='0'
              max='255'
              step='1'
              title='Green'
              setValue={(value) => handleChangeValue(value, 1)}
            />
            <Slider 
              min='0'
              max='255'
              step='1'
              title='Blue'
              setValue={(value) => handleChangeValue(value, 2)}
            />
          </>
        }
      />
    </FullScreen>
  );
}

export default App;
