import React, from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import City from '../components/City'

import '../../node_modules/open-weather-icons/dist/css/open-weather-icons.css'

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
	i{
		font-size: 60px;
		margin-right: 5px;
	}
`;

const TodayTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
	margin-right: 5px;    
    color: #000;
    font-size: 27px;
	p{
		margin: 0;
	}
	p:nth-child(1){
		font-family: 'OpenSansBold',sans-serif;
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

const Day = styled.div`
	width: 100%;
	margin-top: 5px;
	margin-bottom: 5px;
	font-size: 20px;
	text-align: center;
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

const WeatherScreen = () => {
    return  (
        <Container>
			<Top>
				<TodayContainer>
					<TodayTitle>
						<p>Snow</p>
						<p>Today</p>
					</TodayTitle>
					<i className='owi owi-10d'> </i>
					<TodayTemp>17 <sup>&#8451;</sup></TodayTemp>
				</TodayContainer>
				<City/>
			</Top>
			<Bottom>

				<Day>
					<DayTitle>
						<p>Sun</p>
						<i className='owi owi-11d'> </i>
					</DayTitle>
					<DayTemp>23<sup>&#8451;</sup></DayTemp>
				</Day>

				<Day>
					<DayTitle>
						<p>Mon</p>
						<i className='owi owi-13d'> </i>
					</DayTitle>
					<DayTemp>23<sup>&#8451;</sup></DayTemp>
				</Day>

				<Day>
					<DayTitle>
						<p>Tue</p>
						<i className='owi owi-01d'> </i>
					</DayTitle>
					<DayTemp>22.4<sup>&#8451;</sup></DayTemp>
				</Day>

				<Day>
					<DayTitle>
						<p>Wed</p>
						<i className='owi owi-03d'> </i>
					</DayTitle>
					<DayTemp>12<sup>&#8451;</sup></DayTemp>
				</Day>

				<Day>
					<DayTitle>
						<p>thu</p>
						<i className='owi owi-04d'> </i>
					</DayTitle>
					<DayTemp>33<sup>&#8451;</sup></DayTemp>
				</Day>
			</Bottom>
        </Container>
    )
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps,)(WeatherScreen);
