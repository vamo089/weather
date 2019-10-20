import React from 'react';
import {Field, reduxForm} from 'redux-form'
import styled from "styled-components";
import * as actions from '../store/actions'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Loader from "./Loader";

const Container = styled.div`
	margin: auto;
	position: relative;
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

const CityList = styled.ul`
	top: 66px;
	z-index: 1;
	margin: 0;
	padding-right: 10px;
	padding-left: 10px;
`;
const CityListItem = styled.li`
	font-size: 20px;
	text-align: center;
	padding: 5px;
	cursor: pointer;
	display: block;
	&:first-child{
		border-top: 2px solid rgba(255, 255, 255, 0.5);
	}
	&:hover{
		background: #ccc;
	}
`;

let City = ({getCitiesList, cityList}) => {
	return (
		<Container>
			<Input onChange={getCitiesList} placeholder='city' name='city' component='input' type='text'
				   autoComplete='off'/>
			<CityList>
				{cityList.loader && <Loader />}
				{
					cityList.data &&
					cityList.data.map((item, i) => {
						const {city, country} = item;
						return (
							<CityListItem key={i}>
								{city}, {country}
							</CityListItem>
						)
					})
				}
			</CityList>
		</Container>
	);
};

City = reduxForm({
	form: 'city'
})(City);

const mapStateToProps = (state) => {
	return {
		cityList: state.reducer.cityList
	}
};

const mapDispatchToProps = (dispatch) => {
	const {getCitiesList} = bindActionCreators(actions, dispatch);
	return {
		getCitiesList
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(City);