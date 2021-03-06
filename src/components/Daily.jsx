import React from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import * as actions from "../store/actions";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const DayContainer = styled.div`
	width: 100%;
	margin-top: 5px;
	margin-bottom: 5px;
	font-size: 20px;
	text-align: center;
	cursor: pointer;
	&:not(:last-child){
		border-right: 2px solid rgba(255, 255, 255, 0.5);
	}
`;

const DayTitle = styled.div`
	display: flex;
	justify-content: center;
	p{
		margin: 0 5px 0 0;
		font-size: 24px;
	}
	i{
		font-size: 30px;
	}
`;

const DayTemp = styled.div`
	margin-top: 2px;
	font-family: 'OpenSansBold',sans-serif;
	font-size: 26px;
	sup{
		font-weight: 600;
	}
`;

const Daily = ({dailyWeather, openHourlySlider}) => {
	return (
		<Container>
			{
				dailyWeather &&
				dailyWeather.map((item,i) =>{
					const {day,hourly} = item;
					const {temp,icon,description} = hourly.filter(item => item.hour === '12am' || '03am')[0];
					return(
						<DayContainer key={i} title={description} onClick={()=>{openHourlySlider(i)}}>
							<DayTitle>
								<p>{day.slice(0,3)}</p>
								<i className={`owi owi-${icon}`}> </i>
							</DayTitle>
							<DayTemp>{temp}<sup>&#8451;</sup></DayTemp>
						</DayContainer>
					)
				})
			}
		</Container>
	);
};

Daily.propTypes = {
	dailyWeather: PropTypes.array,
	openHourlySlider: PropTypes.func
};

const mapDispatchToProps = dispatch => {
	const {openHourlySlider} = bindActionCreators(actions, dispatch);
	return {
		openHourlySlider
	}
};

const mapStateToProps = state => {
	return {
		dailyWeather: state.reducer.dailyWeather
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Daily);
