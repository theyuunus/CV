import React from 'react';
import './text.scss'
import { TextProps } from '../../interface/text';

const Text: React.FC<TextProps> = ({
    children,
    className
}) => {
    return <p className={`Text ${className}`}>{children}</p>;
};

export default Text