import styled from "styled-components";

export const Button1 = styled.button`
    cursor: pointer;
    border: ${(props) => props.theme === 'primary'
        ? 'none'
        : '1px solid #eee'};
    background: ${(props) => props.theme === 'primary'
        ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'
        : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    font-weight: 400;

    &:hover{
        background-color: ${(props) => props.theme === 'primary'
        ? '#000'
        : '#fff'};
        color:  ${(props) => props.theme === 'primary'
        ? ''
        : '#000'};
        font-weight: 400;
        transform: translateY(2px);
    }

    &:active{
        opacity: 0.5;
    }
`