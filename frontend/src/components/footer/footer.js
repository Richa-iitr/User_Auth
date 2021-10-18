import { Col, Container, Row } from "react-bootstrap";

const Footer=()=>{
    return (
        <footer style={{
            width: "100%",
            position: "relative",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            color: "white",
        }}>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Coyright &copy; 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;