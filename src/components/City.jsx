import React from 'react';
import { Field, reduxForm } from 'redux-form'
import styled from "styled-components";

const Container = styled.div`
	margin: auto;    
`;

const Input = styled(Field)`
	font-size: 36px;
	text-align: center;
    border: none;
    background: transparent;
    line-height: normal;
    &:focus{
    	outline: none;
    }
`;
let City = () => {
	return  (
			<Container>
				<Input placeholder='city' name='city' component='input' type='text' autoComplete='off'/>
			</Container>
		);
};

City = reduxForm({
	form: 'city'
})(City);

export default City