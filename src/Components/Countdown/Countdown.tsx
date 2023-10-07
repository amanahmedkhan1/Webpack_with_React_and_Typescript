import React from "react";
import { ICountdown } from "./Countdown.types";
import * as S from "./Countdown.styled";

export const Countdown = ({ heading, count }: ICountdown): JSX.Element => {
    return (
    <S.CountdownWrapper>
        <S.CountdownHeading>
            {heading}
        </S.CountdownHeading>

        <S.CountdownHeading>
            {count}
        </S.CountdownHeading>
        
        <S.ButtonWrapper>
            <S.CountdownButton>
                - Dicressed
            </S.CountdownButton>
            <S.CountdownButton color={'blue'}>
                + Incressed
            </S.CountdownButton>
        </S.ButtonWrapper>

    </S.CountdownWrapper>);
};