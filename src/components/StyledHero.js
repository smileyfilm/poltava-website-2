import styled from "styled-components";
import defaultImg from '../images/member-1.jpeg';

const StyledHero = styled.header`
min-height: calc(180vh - 70px);
background: url(${props => props.img? props.img : defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
 
export default StyledHero; 