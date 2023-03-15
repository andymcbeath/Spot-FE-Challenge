import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card'
import axios from 'axios';



const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email('the email address is invalid').required(),
  event: Yup.string().required(),
});

export default function Booking() {
  const handleSubmit = async (values) => {
    try {
      await axios.post("/bookings", values);
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
              event: ''
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
                      className={touched.firstName && !errors.email ? 'is-valid' : touched.email ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-6" style={{ paddingBottom: "1rem"}}>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Please Describe Your Event</Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      name="event"
                      value={values.event}
                      onChange={handleChange}
                      isValid={touched.event && !errors.event}
                      className={touched.event && !errors.event ? 'is-valid' : touched.event ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please describe your event!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
     <Card className="BioPic shadow d-flex flex-column align-items-center" style={{width: "100%", marginTop: "4rem"}} >
      <Card.Img src="/assets/On-Tour-Photo.jpg" alt="Card image" />
     </Card>
    </div>
  )
}