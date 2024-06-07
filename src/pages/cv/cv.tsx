import React from "react"
import './cv.scss'
import Container from "../../components/container/container"
import Text from "../../components/text/text"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import Title from "../../components/title/title";
import Logo from '../../images/Logo/Logo.svg'
import { Card } from "../../components/card/card";

const CV: React.FC = () => {
    return (
        <React.Fragment>
            <Container>
                <header className="Header">
                    <div className="Header__title">
                        <div className="Header__title-div">
                            <img
                                src={Logo}
                                alt="error"
                                className="Header__title-div-img"
                            />
                            <Title title="Yunus Obidxo'jayev" fontSize={30} />
                        </div>

                        <Text>
                            Front-end developer
                        </Text>
                    </div>

                    <div className="Header__media">
                        <a className="Line" href="https://github.com/theyuunus" target="_Blank" rel="noreferrer">
                            <FaGithub className="Line-icon" />
                            <Text>
                                theyuunus
                            </Text>
                        </a>

                        <a className="Line" href="" target="_Blank" rel="noreferrer">
                            <FaLocationDot className="Line-icon" />
                            <Text>
                                Uzbekistan, Tashkent
                            </Text>
                        </a>

                        <a className="Line" href="mailto:theyuunus@gmail.com" target="_Blank" rel="noreferrer">
                            <IoIosMail className="Line-icon" />
                            <Text>
                                theyuunus@gmail.com
                            </Text>
                        </a>

                        <a className="Line" href="https://www.linkedin.com/in/theyuunus" target="_Blank" rel="noreferrer">
                            <FaLinkedin className="Line-icon" />
                            <Text>
                                theyuunus
                            </Text>
                        </a>

                        <a className="Line" href="https://t.me/theyuunus" target="_Blank" rel="noreferrer">
                            <BsTelegram className="Line-icon" />
                            <Text>
                                +998 (90) 015-88-60
                            </Text>
                        </a>
                    </div>
                </header>

                <section>
                    <Card
                        type="primary"
                        title="Summary"
                        text="Self-motivated and highly reliable front-end developer. With experience in project development, and great communication skills"
                    />
                </section>

                <section className="info">
                    <div>
                        <Card
                            text="Experience"
                            className="info__title"
                            />
                        <div className="info__experience">
                            <Text className="Line info__info__experience-date">
                                Present Apr 2024
                            </Text>

                            <Card
                                type="primary"
                                title="Apinline"
                                text="* I'm currently employed as a Front-end Developer, where I specialize in bringing website designs to life. My responsibilities include implementing design elements and occasionally developing additional features to enhance user experience."
                            />
                        </div>

                        <div>
                            <Card
                                text="Projects"
                            />
                        </div>
                    </div>

                    <div>
                        <Card
                            type="primary"
                            title="Foreign Languages"
                            text="Uzbek (native) English (A2) Russian (A2)"
                        />

                        <Card
                            type="primary"
                            title="Languages"
                            text="JavaScript TypeScript(basic)"
                        />

                        <Card
                            type="primary"
                            title="Frameworks"
                            text="ReactJS React-TypeScript Bootstrap (5.3) React-Bootstrap ant.design"
                        />

                        <Card
                            type="primary"
                            title="Other"
                            text="HTML CSS SCSS TAILWIND.CSS JSON-SERVER REST-API"
                        />

                        <Card
                            type="primary"
                            title="Tools"
                            text="VS code Figma Git Font-Awesome Github"
                        />
                    </div>
                </section>
            </Container>
        </React.Fragment>
    )
}

export default CV