import React, {useEffect} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {Normalize} from 'styled-normalize'
import WeatherScreen from './components/WeatherScreen'

const GlobalStyle = createGlobalStyle`
  body{
  	@font-face {
		src: url('./fonts/OpenSans-Regular.ttf');
		font-family: 'OpenSans';
	}
    @font-face {
		src: url('./fonts/OpenSans-Bold.ttf');
		font-family: 'OpenSansBold';
    }
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: 'OpenSans',sans-serif;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 70px;
  text-align: center;
  font-family: 'OpenSansBold',sans-serif;
`;

const EdgeBackground = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    margin: auto;
    background: url("./images/rainning.jpg") no-repeat;
    background-size: cover;
    filter:blur(2px);
`;
const Background = styled.div`
    width: 66%;
    margin: auto;
    min-height: 100vh;
    background: url("./images/rainning.jpg") no-repeat;
    background-size: cover;
    filter: brightness(0.6);
    border-right: solid rgba(255, 255, 255, 0.5);
    border-left: solid rgba(255, 255, 255, 0.5);
`;

function App() {
	useEffect(() => {

		fetch('http://api.ipstack.com/check?access_key=a1ed31cbc1c7e25105c08430110aab50').then(response =>{
			return response.json()
		}).then(response =>{

			// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${response.city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`)
			fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${response.city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`)

				.then(response => {
					return response.json()
				}).then(json => {
				console.log(json)
			});
		})

	}, []);

	return (
		<div>
			<Normalize/>
			<GlobalStyle/>
			<EdgeBackground/>
			<Background/>
			<Container>
				<Title>Bundle Up!</Title>
				<WeatherScreen/>
			</Container>
		</div>
	);
}

export default App;