import React from "react";
import * as S from "./Header.styled";
import { IHeader } from "./Header.types";

export const Header = ({ heading, navItem }: IHeader): JSX.Element => {
    return(
        <S.HeaderSection>
            <S.DisplayFlex>
                <S.HeaderTitle>
                    {heading}
                </S.HeaderTitle>
                <S.Navbar>
                    <ul>
                        <li>{navItem}</li>
                        <li>{navItem}</li>
                    </ul>
                </S.Navbar>
            </S.DisplayFlex>
        </S.HeaderSection>
    )
};
