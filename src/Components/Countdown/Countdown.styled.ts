import styled from 'styled-components';

export const CountdownWrapper = styled.div`
    border-radius:12px;    
    margin:20px auto;
    background: #e5e5e5;
    padding:15px;
    width:500px;
    text-align:center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const CountdownHeading = styled.h2`
    font-size:24px;
    text-align:center;
    margin:10px 0;
`;

export const CountdownButton = styled.button<{
    color?: string;
}>`
    border: 1px solid #bababa;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    margin: 0 10px;
    cursor:pointer;
    color:#FFF;
    background: ${({ color }) => color === 'blue' ? 'blue' : 'red'};
`;