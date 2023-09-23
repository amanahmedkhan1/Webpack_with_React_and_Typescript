import React from "react";
import { HeaderSection } from "./Header.styled";
import { IHeader } from "./Header.types";

export const Header = (props: IHeader): JSX.Element => {
    return(
        <HeaderSection>
            {props.heading}
        </HeaderSection>
    )
};
