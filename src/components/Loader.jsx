import React from 'react';
import styled from "styled-components";


const LoaderBody = styled.div`
	text-align: center;
	font-size: 28px;
	i{
		animation: rotate 2s linear infinite;
	}
	@keyframes rotate {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(90deg); }
	};
`;

const Loader = () => {
	return (
		<LoaderBody>
			<i className='owi owi-01d'> </i>
		</LoaderBody>
	);
};

export default Loader;