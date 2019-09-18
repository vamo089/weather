import React from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";

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

const Day = () => {
	return (
		<Container>
			<DayContainer>
				<DayTitle>
					<p>Sun</p>
					<i className='owi owi-11d'> </i>
				</DayTitle>
				<DayTemp>23<sup>&#8451;</sup></DayTemp>
			</DayContainer>

			<DayContainer>
				<DayTitle>
					<p>Mon</p>
					<i className='owi owi-13d'> </i>
				</DayTitle>
				<DayTemp>23<sup>&#8451;</sup></DayTemp>
			</DayContainer>

			<DayContainer>
				<DayTitle>
					<p>Tue</p>
					<i className='owi owi-01d'> </i>
				</DayTitle>
				<DayTemp>22.4<sup>&#8451;</sup></DayTemp>
			</DayContainer>

			<DayContainer>
				<DayTitle>
					<p>Wed</p>
					<i className='owi owi-03d'> </i>
				</DayTitle>
				<DayTemp>12<sup>&#8451;</sup></DayTemp>
			</DayContainer>

			<DayContainer>
				<DayTitle>
					<p>thu</p>
					<i className='owi owi-04d'> </i>
				</DayTitle>
				<DayTemp>33<sup>&#8451;</sup></DayTemp>
			</DayContainer>
		</Container>
	);
};

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps,)(Day);
