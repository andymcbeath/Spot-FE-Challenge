import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import Modal from './Modal';


const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email('the email address is invalid').required(),
  phoneNumber: Yup.string().phoneNumber('the phone number is invalid'),
});

export default function Reservations() {
  const handleSubmit = async (values) => {
    try {
      await axios.post("/resevations", values);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Form submission failed");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2rem", paddingBottom: "3rem"}}>
      <Card className="shadow d-flex flex-column align-items-center" style={{width: "75%"}} >
        <Card.Body className="d-flex flex-column align-items-center">
          <h2>Book Us Today!</h2>
          <Formik
            validationSchema={schema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '(XXX)XXX-XXXX'
            }}
            onSubmit={handleSubmit}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" hasvalidation="true" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.firstName && !errors.firstName}
                      className={touched.firstName && !errors.firstName ? 'is-valid' : touched.firstName ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your first name!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.lastName && !errors.lastName}
                      className={touched.lastName && !errors.lastName ? 'is-valid' : touched.lastName ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please provide your last name!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-12" style={{ paddingBottom: "1rem"}}>
                  <Form.Group as={Col} md="12" controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      className={touched.email && !errors.email ? 'is-valid' : touched.email ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-6" style={{ paddingBottom: "1rem"}}>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      isValid={touched.phoneNumber && !errors.phoneNumber}
                      className={touched.phoneNumber && !errors.phoneNumber ? 'is-valid' : touched.phoneNumber ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please enter a valid US phone number in the format (XXX)XXX-XXXX</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Purcahse for $14.00</Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  )
}