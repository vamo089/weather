import React from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";

const Container = styled.div`
	margin: auto;    
`;

const Input = styled.input`
	font-size: 36px;
	text-align: center;
    border: none;
    background: transparent;
    &:focus{
    	outline: none;
    }
`;
const City = () => {
	return  (
			<Container>
				<Input value={'Tomsk,Russia'}/>
			</Container>
		);
};

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps,)(City);
