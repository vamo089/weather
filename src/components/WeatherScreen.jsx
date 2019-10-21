import React from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import Daily from '../components/Daily'
import Slider from '../components/Slider'
import '../../node_modules/open-weather-icons/dist/css/open-weather-icons.css'
import CityField from "./CityField";
import * as actions from "../store/actions";
import {bindActionCreators} from "redux";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	border-radius: 3px;
	background:rgba(255, 255, 255, 0.5);
	border: 3px solid rgba(255, 255, 255, 0.5);
`;

const Top = styled.div`
	display: flex;
	flex-direction: row;
`;

const TodayContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
	margin-bottom: 10px;
	padding-left: 20px;
	padding-right: 12px;
	border-right: 2px solid rgba(255, 255, 255, 0.5);
	cursor: ${props => props.slider ? 'pointer' : 'auto'};
	i{
		font-size: 60px;
		margin-right: 5px;
		display: flex;
		align-items: center;
	}
`;

const TodayTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
	margin-right: 5px;    
    color: #000;
    font-size: 27px;
    text-align: center;
	p{
		margin: 0;
	}
	p:nth-child(1){
		font-family: 'OpenSansBold',sans-serif;
		&::first-letter{
			text-transform: uppercase;
		}
	}
	p:nth-child(2){
		font-family: 'OpenSans',sans-serif;
	}
`;
const TodayTemp = styled.div`
	align-self: center;
	font-size: 35px;
	white-space: nowrap;
	font-family: 'OpenSansBold',sans-serif;  
  sup{
	top: -1em;
	left: -0.5em;
	font-size: 14px;
	font-weight: 600;
  }
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content:space-between;
	border-top: 2px solid rgba(255, 255, 255, 0.5);
	margin-right: 10px;
	margin-left: 10px;
`;

const WeatherScreen = ({weather, slider, setSlider}) => {
	return (
		<Container>
			<Top>
				<TodayContainer slider={slider}>
					<TodayTitle title={weather.description}>
						<p>{weather.main}</p>
						<p>Today</p>
					</TodayTitle>
					<i className={`owi owi-${weather.icon}`}> </i>
					<TodayTemp>{weather.temp} <sup>&#8451;</sup></TodayTemp>
				</TodayContainer>
				<CityField/>
			</Top>
			<Bottom>
				{slider ? <Slider/> : <Daily/>}
			</Bottom>
		</Container>
	)
};

const mapDispatchToProps = dispatch => {
	const {setSlider} = bindActionCreators(actions, dispatch);
	return {
		setSlider
	}
};

const mapStateToProps = state => {
	return {
		weather: state.reducer.weather,
		slider: state.reducer.slider
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);
