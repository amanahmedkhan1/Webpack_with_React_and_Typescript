import React, { useState } from "react";
import { ICountdown } from "./Countdown.types";
import * as S from "./Countdown.styled";

export const Countdown = ({ heading, count }: ICountdown): JSX.Element => {
    const [currentCount, setCurrentCount] = useState<number>(count);
    
    // const increment = () => {
    //     setCurrentCount(prevState => {
    //         return prevState + 1;
    //     });
    // }

    // const decrement = () => {
    //     setCurrentCount(prevState => {
    //         return prevState - 1;
    //     });
    // }
    
    const incrementDecrement = (increment : boolean) => {
        if(increment = true){
            setCurrentCount(prevState => {
                return prevState + 1;
            });
        }else{
            setCurrentCount(prevState => {
                return prevState - 1;
            });
        };
    }

    return (
        <S.CountdownWrapper>
            <S.CountdownHeading>
                {heading}
            </S.CountdownHeading>

            <S.CountdownHeading>
                {currentCount}
            </S.CountdownHeading>
            
            <S.ButtonWrapper>
                <S.CountdownButton onClick={() => incrementDecrement(false)}>
                    - Dicressed
                </S.CountdownButton>
                <S.CountdownButton color={'blue'} onClick={() => incrementDecrement(true)}>
                    + Incressed
                </S.CountdownButton>
            </S.ButtonWrapper>
        </S.CountdownWrapper>
    );
};