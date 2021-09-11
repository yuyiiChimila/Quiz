import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers';
import {Button, Form, Row, Col} from 'react-bootstrap';
import styles from './StyleQuiz.module.css';

export default function QuizForm() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues:{
      gender: 'Male',
    },
    resolver:yupResolver(
      yup.object().shape({
      name: yup.string().required(),
      tel: yup.string().min(10).required(),
      confirm: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
      gender: yup.string().required(),
    })
    )
  })

  const [data, setData] = useState({ name:'', tel:'', confirm:'', email:'', password:'', gender:'' })

  const submit = (value) =>{
    console.log(value)
    if(value.password === value.confirm){
      setData(value)
    }else{
        alert('error password')
    }
  }
  return (
    <>
    <Row className="justify-content-center">
    <Col sm="8">
      <Form onSubmit={handleSubmit(submit)}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className={styles.textRequired}>Name:</Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="name" name="name" ref={register} className={errors.name && "border border-danger"}/>
          {errors.name && <p className="mb-0 mt-1 text-danger">Please input your name!</p>}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className={styles.textRequired}>Email:</Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="email@example.com" name="email" ref={register} className={errors.email && "border border-danger"}/>
          {errors.email && <p className="mb-0 mt-1 text-danger">Please input your E-mail!</p>}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className={styles.textRequired}>Tel:</Form.Label>
        <Col sm="8">
          <Form.Control type="number" placeholder="0987654321" name="tel" ref={register} className={errors.tel && "border border-danger"}/>
          {errors.tel && <p className="mb-0 mt-1 text-danger">Please input your tel!</p>}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className={styles.textRequired}>Password:</Form.Label>
        <Col sm="8">
          <Form.Control type="password" placeholder="Password" name="password" ref={register} className={errors.password && "border border-danger"}/>
          {errors.password && <p className="mb-0 mt-1 text-danger">Please input your password!</p>}
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className={styles.textRequired}>Confirm Password:</Form.Label>
        <Col sm="8">
          <Form.Control type="password" placeholder="Confirm Password" name="confirm" ref={register} className={errors.confirm && "border border-danger"}/>
          {errors.confirm && <p className="mb-0 mt-1 text-danger">Please confirm your password!</p>}
        </Col>
      </Form.Group>
      {/* <Form.Control as="select">...</Form.Control> */}

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className={styles.textRequired}>Gender:</Form.Label>
        <Col sm="8">
        <Form.Control as="select" defaultValue="Choose..." name="gender" ref={register} className={errors.gender && "border border-danger"}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
          {errors.gender && <p className="mb-0 mt-1 text-danger">Please inpit your gender!</p>}
        </Col>
      </Form.Group>

      <Row>
        <Col sm="4"></Col>
        <Col sm="8">
        <Button variant="primary" type="submit">Submit</Button>
        </Col>
      </Row>
      </Form>
      
      <Row className="mt-5">
        <p className="mb-0">Name: {data.name}</p>
        <p className="mb-0">Email: {data.email}</p>
        <p className="mb-0">Tel: {data.tel}</p>
        <p className="mb-0">Gender: {data.gender}</p>
      </Row>
      </Col>
      </Row>
    </>
  )
}
