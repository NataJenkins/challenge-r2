import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import themes from "./themes.js";
import Wrapper from "./AppStyles.js";

function App() {
    // const [activeTheme, setTheme] = useState(themes.light);

    const getTheme = (theme) => {
        console.log(theme);
        switch (theme) {
            case "light":
                return "light";
            case "dark":
                return "dark";
            case "sol":
                return "sol";
            case "arena":
                return "arena";
            case "mar":
                return "mar";

            default:
        }
    };

    const [activeTheme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return themes[getTheme(storedTheme)];
    });

    const handleChange = (e) => {
        const selectedTheme = getTheme(e.target.value);

        setTheme(themes[getTheme(e.target.value)]);
        localStorage.setItem("theme", selectedTheme);
        console.log(activeTheme);
    };

    return (
        <Wrapper theme={activeTheme}>
            <Container>
                <Row className="header">
                    <Col>
                        <h1>Header</h1>
                        <label htmlFor="">12 Columns</label>
                        <label>Selecciona tu tema</label>
                        <select value={activeTheme} onChange={handleChange}>
                            <option value="light">light</option>
                            <option value="dark">dark</option>
                            <option value="sol">sol</option>
                            <option value="arena">arena</option>
                            <option value="mar">mar</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={8} className="main">
                        <h2>Main</h2>
                        <label htmlFor="">Columns</label>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <p>
                            Maecenas accumsan lacus vel facilisis. Posuere lorem
                            ipsum dolor sit amet consectetur adipiscing elit
                            duis. Malesuada fames ac turpis egestas integer eget
                            aliquet. Consectetur adipiscing elit pellentesque
                            habitant morbi tristique. Lacus vel facilisis
                            volutpat est velit egestas.
                        </p>
                    </Col>
                    <Col sm={12} md={4} className="aside">
                        <h2>Aside</h2>
                        <label htmlFor="">columns</label>
                    </Col>
                </Row>
                <Row className="justify-content-between">
                    <Col sm={12} md={4} lg={3} className="card-component">
                        <h3>Columns</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </Col>
                    <Col sm={12} md={4} lg={3} className="card-component">
                        <h3>Columns</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </Col>
                    <Col sm={12} md={4} lg={3} className="card-component">
                        <h3>Columns</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="footer">
                        <h2>Footer</h2>
                        <label htmlFor="">Columns</label>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default App;
