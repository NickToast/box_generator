import './App.css';
import Box from './components/Box'
import AddColor from './components/AddColor';
import React, {useState} from 'react';

function App() {

  const [boxes, setBoxColor] = useState([]);

  const selectColor = (color) => {
    setBoxColor([...boxes, color])
  }

  const boxStyle = {
    padding: "25px",
    gap: "25px",
    display: "flex",
    flexWrap: "wrap"
  }


  return (
    <>
      <AddColor newColor={selectColor} />
      <div style={boxStyle}>
        {boxes.map((box, i) =>
        <Box color={box.color} size={box.size} num={i}/>)}
      </div>
    </>
  );
}

export default App;
