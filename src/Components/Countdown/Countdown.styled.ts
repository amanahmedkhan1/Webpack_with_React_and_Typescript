import Styled from 'styled-components';

export const CountdownWrapper = Styled.div`
    border-radius:12px;    
    margin:20px auto;
    background: #e5e5e5;
    padding:15px;
    width:500px;
    text-align:center;

    .bgBlue{
        background:blue;
        color:#FFF;
    }
    .bgRed{
        background:red;
        color:#FFF;
    }

    .dFlex{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
`;

export const CountdownHeading = Styled.h2`
    font-size:24px;
    text-align:center;
    margin:10px 0;
`;

export const CountdownButton = Styled.button`
    border: 1px solid #bababa;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    margin: 0 10px;
    cursor:pointer;
`;