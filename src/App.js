import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './store/actions'
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
    filter:contrast(0.7);
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

function App({initialization}) {
	useEffect(() => {
		initialization();
	}, [initialization]);

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

const mapDispatchToProps = (dispatch) => {
	const {initialization} = bindActionCreators(actions, dispatch);
	return {
		initialization
	}
};

export default connect(null,mapDispatchToProps)(App);