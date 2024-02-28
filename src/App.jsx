import { useState } from 'react'
import './App.css'
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


function App() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };


  

  const initialFormValues = {
    names: [
      "I like cats" ,
      "I like cats2" ,
      "I like cats3",
      "I like cats4" ,
    ]
  };

  /* const initialFormValues = {
    names: [
      { "feature": "I like cats" },
      { "feature": "I like cats2" },
      { "feature": "I like cats3" },
      { "feature": "I like cats4" },
    ]
  }; */
  return (
    <>
   <Form
        name="dynamic_form_item"
        onFinish={onFinish}
        initialValues={initialFormValues}
      >
        <Form.List name="names">
            {(fields, { add, remove }) => (
    <>
      {fields.map((field, index) => (
        <Form.Item
          required={false}
          key={field.key}
          initialValue={initialFormValues.names[index]?.feature}
        >
          <Form.Item
            {...field}
            validateTrigger={['onChange', 'onBlur']}
          >
            <Input
              placeholder="passenger name"
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          {fields.length > 0 ? (
            <MinusCircleOutlined
              className="dynamic-delete-button"
              onClick={() => remove(field.name)}
            />
          ) : null}
        </Form.Item>
      ))}

      <Form.Item>
        <Button
          type="dashed"
          onClick={() => add()}
          style={{
            width: '100%',
          }}
          icon={<PlusOutlined />}
        >
          {initialFormValues.names[fields.length]?.feature || 'Add field'}
        </Button>
      </Form.Item>
    </>
  )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default App
