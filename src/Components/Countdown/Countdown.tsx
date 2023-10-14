import React, { useState } from "react";
import { ICountdown } from "./Countdown.types";
import * as S from "./Countdown.styled";

export const Countdown = ({ heading, count }: ICountdown): JSX.Element => {
    const [currentCount, setCurrentCount] = useState<number>(count);
    
    const incrementDecrement = (isIncrement : boolean) => {
        return isIncrement
            ? setCurrentCount((prevState: number) => {return prevState + 1})
            : setCurrentCount((prevState: number) => {
                if(prevState <= 0){
                    return prevState
                }
                return prevState - 1
            })
    };

    return (
        <S.CountdownWrapper>
            <S.CountdownHeading>
                {heading}
            </S.CountdownHeading>

            <S.CountdownHeading>
                {currentCount}
            </S.CountdownHeading>
            
            <S.ButtonWrapper>
                <S.CountdownButton disabled={!currentCount} onClick={() => incrementDecrement(false)}>
                    - Decrease
                </S.CountdownButton>
                <S.CountdownButton color={'blue'} onClick={() => incrementDecrement(true)}>
                    + Incressed
                </S.CountdownButton>
            </S.ButtonWrapper>
        </S.CountdownWrapper>
    );
};
