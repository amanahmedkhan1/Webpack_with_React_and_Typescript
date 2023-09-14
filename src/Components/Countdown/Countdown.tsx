import React from "react";
import { ICountdown } from "./Countdown.types";

export const Countdown = (props: ICountdown): JSX.Element => {
    return (<div>Countdown {props.count}</div>);
};
