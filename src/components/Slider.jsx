import React from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Container = styled.div`
    display: flex;
    width: ${props => `${props.width }0%`};
    padding: 50px;
    margin: auto;
    .rc-slider-mark{
    	left: -33px;
    }
`;

const railStyle = {
	backgroundColor: 'rgba(0, 0, 0, 0.5)'
};
const trackStyle = {
	backgroundColor: '#000'
};
const dotStyle = {
	border: '2px solid #000'
};
const markStyle = {
	color: '#000',
	fontFamily: 'OpenSans,sans-serif',
	fontSize: '23px',
	strong:{
		fontSize: '16px',
		marginLeft: '2px'
	}
};

const Day = () => {
	let hoursCount = 8;
	let data = {};
	for (let i = 0; i < hoursCount; i++) {
		let step = 100/hoursCount;


		data[step * (i + 1)] = {
			style: markStyle,
			label: <span>3<strong style={markStyle.strong}>am</strong> </span>,
		}
	}

	return (
		<Container width={hoursCount}>
			<Slider handleStyle={dotStyle} dotStyle={dotStyle} trackStyle={trackStyle} railStyle={railStyle} marks={data} step={null} />
		</Container>
	);
};

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps,)(Day);
