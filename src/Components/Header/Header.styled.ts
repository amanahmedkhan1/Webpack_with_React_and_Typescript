import Styled from 'styled-components';

export const HeaderSection = Styled.header`
    background: #272727;
    color: #FFF;
    padding: 4px 22px;
`;

export const HeaderTitle = Styled.h2`
    font-size:20px;
    margin:0;
`;

export const DisplayFlex = Styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Navbar = Styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    li{
        display:inline-block;
        padding:0 10px;
    }
`;
