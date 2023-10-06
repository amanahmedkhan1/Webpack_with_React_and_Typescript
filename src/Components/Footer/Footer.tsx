import React from "react";
import * as S from "./Footer.styled";
import { IFooter } from "./Footer.types";

export const Footer = ({ heading }: IFooter): JSX.Element => {
    return(
        <S.FooterSection>
            {heading}
        </S.FooterSection>
    )
};
