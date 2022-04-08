import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PswdValidation = () => {
  const [criteria, setCriteria] = useState({
    isUppercase: false,
    isLowercase: false,
    isSpecialCharacter: false,
    isDigit: false,
    pswdlength: false,
  });

  const uppercase = '/[A-Z]/';
  const lowercase = '/[a-z]/';
  const SpecialCharacter = '/[!@#$%^&*]/';
  const digit = '/[0-9]/';
  // const passwordlength=

  const handleOnChange = (event) => {
    setCriteria(event.target.value);
  };
  console.log(criteria);


  

  return (
    <>
      <div className="setmargin">
        <Row>
          <Col xs={4}></Col>

          <Col xs={4}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">  Username </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="username" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"> Password </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={criteria}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm="2"></Col>
              <Col sm="10">
                <Button variant="success" className="setbtnsize">
                  Success
                </Button>
              </Col>
            </Form.Group>
         
          <Form.Group className="mb-3" id="formGridCheckbox">   
              <Form.Check type="checkbox" label="Password must have at least one upper-case character" value={criteria.isUppercase} />
              <Form.Check type="checkbox" label="Password must have at least one lower-case character" value={criteria.isLowercase} />
              <Form.Check type="checkbox" label="Password must have at least one special character(!@#$%)" value={criteria. isSpecialCharacter}/>
              <Form.Check type="checkbox" label="Password must have at least one number" value={criteria.isDigit} />
            </Form.Group>
         </Col>


          <Col xs={4}></Col>
        </Row>
      </div>
    </>
  );
};
export default PswdValidation;
