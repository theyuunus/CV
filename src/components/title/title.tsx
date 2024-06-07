import React from "react";
import './title.scss';
import { TitleProps } from "../../interface/title";

const Title: React.FC<TitleProps> = ({
    className,
    title,
    fontSize = 12,
}) => {
    return (
        <h1 className={`Title ${className}`} style={{ fontSize: fontSize }}>
            {title}
        </h1>
    );
};

export default Title;
