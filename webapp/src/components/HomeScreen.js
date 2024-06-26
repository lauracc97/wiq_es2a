import React, { useState,useEffect } from 'react';
import { Container,Slider,TextField} from '@mui/material';
import './HomeScreen.css';
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const [value, setValue] = useState(15);
    const navigate = useNavigate();
    

    const handleStartButtonClick = () => {
      localStorage.setItem('numQuestions', value);
      navigate("/game");
    };

    const handleHistoryButton = () => {
      navigate("/history");
    }
    const checkUserLogin = () => {
      const token = localStorage.getItem('token');
      if (token==null) {
        navigate("/");
      }
    }
    
useEffect(() => {
    checkUserLogin();
    const logoutButton = document.getElementById('btLogout');
    if (logoutButton) {
      logoutButton.style.display = 'inline-block';
    }
    // eslint-disable-next-line
  }, [])
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Container component="main">
        <div>
            <div id = "home">
              <div className="form-outline" id="formNumPreguntas" >
                <label className="form-label" htmlFor="typeNumber">Número de preguntas:</label>
                
        <TextField
        id="outlined-basic"
        variant="outlined"
        value={value}
        color="info"

        inputProps={{
          "data-testid": "name-input",
          min: 1,
          max: 30,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
        onChange={(e) => {
          const newValue = e.target.value === '' ? 0 : Number(e.target.value);
          setValue(Math.min(Math.max(newValue, 1), 30));
        }}
      />
        <Slider
        value={value}
        onChange={handleChange}
        min={1}
        max={30}
        color="info"
      />
      
        </div>
              <button onClick={handleStartButtonClick} type="button" className="btn btn-outline-primary btn-lg">Jugar</button>
              <button  onClick={handleHistoryButton} type="button" className="btn btn-outline-primary btn-lg">Ver historial</button>
            </div>
        </div>
        </Container>
      )
};

export default HomeScreen;
  