import React,{ useState } from 'react';

import MapPage from '../../pages/maps';
//import AdminPage from '../../pages/admin';
import { Redirect } from "react-router-dom";

import Visualization from '../../pages/weather';

import { Button } from '../ButtonElements';


import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	InfoBtnWrapper1,
	
	ArrowRight,
	ArrowForward,
	ImgWrap,
	Img
	
} from './InfoElements';



	
const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,buttonLink,img,alt,dark,primary,dark2
	}) => {

	const [hover,setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	
	return (
			<InfoContainer lightBg={lightBg} id={id} >
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
									<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<InfoBtnWrapper1>
									
									<Button onClick={event => window.location.href= buttonLink}   onMouseEnter={onHover}
									onMouseLeave={onHover}
										primary='true'
										dark='true'

										
									>{buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />} 
								


								</Button>
							
								</InfoBtnWrapper1>



								</TextWrapper>



						</Column1> 
						<Column2> 
							<ImgWrap>
							<Img src={img} alt={alt}/>
							</ImgWrap>
						</Column2>
					</InfoRow>

				</InfoWrapper>
			</InfoContainer>
	);
};
export default InfoSection;
