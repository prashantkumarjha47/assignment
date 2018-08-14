import React from "react";
import {
  Container,
  Card,
  CardBody,
  Button,
  Input,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Alert
} from "reactstrap";

export default props => {
  return (
    <Container style={{ marginTop: "10px" }}>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <Input
                type="text"
                placeholder="Enter text"
                value={props.query}
                onChange={props.change}
              />
              <Button
                color="primary"
                onClick={props.submit}
                style={{ marginTop: "10px" }}
              >
                Submit
              </Button>{" "}
              <Button
                color="warning"
                onClick={props.reset}
                style={{ marginTop: "10px" }}
              >
                Reset
              </Button>{" "}
            </Col>
            <Col>
              {props.error && (
                <Alert color="danger">
                  Error fetching results, please provide a valid input !
                </Alert>
              )}
              {!props.error && (
                <ListGroup>
                  {props.result.map((data, index) => (
                    <ListGroupItem key={index}>
                      {data.language_name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>{" "}
    </Container>
  );
};
