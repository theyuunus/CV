import React from "react"
import Container from "../../components/container/container"
import Title from "../../components/title/title"
import Text from "../../components/text/text"
import { Card, ProjectCard } from "../../components/card/card"

const Design: React.FC = () => {
    return (
        <React.Fragment>
            <Container>
                <Title title="Title" fontSize={26} />

                <Text text="Text" />

                <Card
                    type="primary"
                    title="tile"
                    text="Text"
                />

                <Card
                    title="tile"
                    text="Text"
                />

                <ProjectCard
                    mainText="HTML SCSS Python"
                    projectName="ChertNodes"
                    projectLink="https://github.com/theyuunus"
                    projectLinkName="github.com/theyuunus"
                    text="Minecraft servers hosting"
                />
            </Container>
        </React.Fragment>
    )
}

export default Design