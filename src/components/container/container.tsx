import React from 'react';
import './container.scss'
import { ContainerProps } from '../../interface/container';

const Container: React.FC<ContainerProps> = ({ className = 'Container', children }) => {
    return <div className={className}> {children} </div>
};

export default Container;