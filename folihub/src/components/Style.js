import styled from "styled-components";
import Logo_Dark from "../img/folihub_dark.png";
import Logo_Light from "../img/folihub_light.png";

const colorPlan1 = {
    Dark: "#292F36",
    Dark_Medium: "#5F696D",
    Medium: "#95A3A4",
    Medium_Light: "#BBC3C4",
    Light: "#DFE3E3",
    Warn: "#B48383",
}

export const colorPlan = colorPlan1;

const FontFormat = styled.div
`
    font-family: Georgia;
`;

const CanvasFormat = styled.div
`
    height: 1000px;
    background-color: ${colorPlan.Light};
    z-index: -1;
`;

const FormFormat = styled.form`
`;

export const NavContainer = styled.div
`
    position: relative;
    display: grid;
    grid-template-columns: 6% 10% 54% 10% 10% 10%;
    justify-items: center | start | center | center | center | center;
    grid-template-areas: 'NavLogo NavName Save Export Preview User';
    height: 50px;
    background-color: ${colorPlan.Dark_Medium};
    box-shadow: 0px 5px 10px ${colorPlan.Medium};
`;

export const NavLogo = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-left: 10px;
    background-size: 80%;
    background-repeat: no-repeat;
    background-image: url(${Logo_Light});
`;

export const NavName = FontFormat.extend
`
    font-weight: bold;
    margin-top: 7px;
    font-size: 30px;
    color: ${colorPlan.Light};
`;

export const AuthenCanvas = CanvasFormat.extend
`
    display: grid;
    grid-template-rows: 20% 50% 30%;
    align-items: end | center | start;
    justify-items: center;
    grid-template-areas: 
    'Title'
    'SignupForm'
    'AuthenRedirectText';
`;

export const Logo = styled.img
`
    margin-top: 100px;
    margin-bottom: auto;
    height:60px;
    width: 140px;
`;

export const Title = FontFormat.extend
`
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 40px;
    color: ${colorPlan.Dark};
`
export const SignupForm = FormFormat.extend`
    width: 30%;
`;

export const LoginForm = FormFormat.extend`

`;

export const InputContainer = styled.div
`
    display: grid;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Button = styled.button
`
    background-color: ${colorPlan.Dark_Medium};
    border-color: ${colorPlan.Dark_Medium};
    color: ${colorPlan.Light};
    font-family: Geogia;
    font-weight: bold;
    border:  2px solid;
    border-radius: 5px;
    height: 10%;
    width: 100%;
    &:hover {background-color: ${colorPlan.Medium}};
    &:active {
        background-color: ${colorPlan.Light};
        color: ${colorPlan.Dark_Medium};
    }b
`;

export const TextLink = styled.a
`
    color: ${colorPlan.Dark_Medium};
    font-family: Geogia;
`;