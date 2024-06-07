import React from "react";
import './text.scss'
import { TextProps } from "../../interface/text";

const Text: React.FC<TextProps> = ({
    className,
    text,
    fontSize = 12,
}) => {
    return (
        <p className={`Text ${className}`} style={{ fontSize: fontSize }}>
            {text}
        </p>
    );
};

export default Text;
