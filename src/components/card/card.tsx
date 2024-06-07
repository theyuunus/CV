import React from "react"
import './card.scss'
import { CardProps } from "../../interface/card"
import Title from "../title/title"
import Text from "../text/text"
import { ProjectCardProps } from "../../interface/projectCard"

export const Card: React.FC<CardProps> = ({
    className,
    type,
    title,
    text,
    width = "100%",
}) => {
    return (
        <div className={`Card ${className}`} style={{ width: width }}>
            {type === "primary" && <Title title={title} fontSize={20} className="Card__Title" />}

            <div className="Card__bottom">
                <Text fontSize={14}>{text}</Text>
            </div>
        </div>
    )
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    mainText,
    projectName,
    projectLink,
    projectLinkName,
    text
}) => {
    return (
        <div className="Card">
            <Text className="Card__Title" fontSize={14}>{mainText}</Text>

            <div className="Card__div">
                <Title title={projectName} fontSize={20} />

                <a href={projectLink} target="_Blank" rel="noreferrer">
                    <Title title={projectLinkName} fontSize={20} />
                </a>
            </div>

            <Text className="Card__Title" fontSize={14}>{text}</Text>
        </div>
    )
}

export default { Card, ProjectCard }