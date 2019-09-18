import React from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Container = styled.div`
    display: flex;
    width: 100%;
`;


const Day = () => {
	return (
		<Container>
			<Slider min={3} max={10}/>
		</Container>
	);
};

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps,)(Day);
