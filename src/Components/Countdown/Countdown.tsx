import React from "react";
import { ICountdown } from "./Countdown.types";
import { CountdownWrapper, CountdownHeading, CountdownButton } from "./Countdown.styled";

export const Countdown = (props: ICountdown): JSX.Element => {
    return (
    <CountdownWrapper>
        <CountdownHeading>
            {props.heading}
        </CountdownHeading>

        <CountdownHeading>
            {props.count}
        </CountdownHeading>
        
        <div className="dFlex">
            <CountdownButton className="bgRed">
                - Dicressed
            </CountdownButton>
            <CountdownButton className="bgBlue">
                + Incressed
            </CountdownButton>
        </div>

    </CountdownWrapper>);
};