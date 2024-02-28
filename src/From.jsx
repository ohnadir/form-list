import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const From = () => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const initialFormValues = {
        package_name: "Gold",
        image_limit: "3",
        word_limit: "1500",
        duration: "6",
        amount: "400",
        names: [
          "I like cats" ,
          "I like cats2" ,
          "I like cats3",
          "I like cats4" ,
        ]
    };
    return (
        <div className="bg-white rounded-2xl border p-5">
        <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            initialValues={initialFormValues}
        >
            <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                    <label htmlFor="" className='text-lg font-normal text-[#0071E3] text-left block mb-[12px]'>Package Name</label>
                    <Form.Item
                        name="package_name"
                        style={{marginBottom: 0}}
                    >
                        <Input
                            name='package_name'
                            placeholder="Enter Feature" 
                            prefix={false}
                            style={{
                                width: "100%",
                                border: "1px solid #8ABEF2",
                                height: "56px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                color: "black",
                                fontSize: "18px"
                            }}
                        />
                    </Form.Item>
                </div>
                <div>
                    <label htmlFor="" className='text-lg font-normal text-[#0071E3]  text-left block mb-[12px]'>Image Limit</label>
                    <Form.Item
                        label="" 
                        name="image_limit"
                        style={{marginBottom: 0}}
                    >
                        <Input
                            name='package_name'
                            placeholder="Enter Feature" 
                            prefix={false}
                            style={{
                                border: "1px solid #8ABEF2",
                                height: "56px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                color: "black",
                                fontSize: "18px"
                            }}
                        />
                    </Form.Item>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="" className='text-lg font-normal text-[#0071E3]  text-left block mb-[12px]'>Amount</label>
                    <Form.Item name="amount" style={{marginBottom: 0}}>
                        <Input
                            name='amount'
                            placeholder="Enter Feature" 
                            prefix={false}
                            style={{
                                border: "1px solid #8ABEF2",
                                height: "56px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                color: "black",
                                fontSize: "18px"
                            }}
                        />
                    </Form.Item>
                </div>
                <div>
                    <label htmlFor="" className='text-lg font-normal text-[#0071E3]  text-left block mb-[12px]'>Package Duration</label>
                    <Form.Item name="duration" style={{marginBottom: 0}}>
                        <Input
                            name='duration'
                            placeholder="Enter Feature" 
                            prefix={false}
                            style={{
                                border: "1px solid #8ABEF2",
                                height: "56px",
                                background: "white",
                                borderRadius: "8px",
                                outline: "none",
                                color: "black",
                                fontSize: "18px"
                            }}
                        />
                    </Form.Item> 
                </div>         
            </div> 
            
            <label htmlFor="" className='text-lg font-normal text-[#0071E3]  text-left block mb-[12px]'>Word Limit</label>
            <Form.Item name="word_limit" style={{marginBottom: 0}}>
                <Input
                    name='word_limit'
                    placeholder="Enter Feature" 
                    prefix={false}
                    style={{
                        border: "1px solid #8ABEF2",
                        height: "56px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        color: "black",
                        fontSize: "18px"
                    }}
                />
            </Form.Item>            
                
            <div className="w-full h-[1px] bg-[#0071E3] my-6"></div> 


            <div className="grid grid-cols-1 gap-4">
                <Form.List name="names">
                    {
                        (fields, { add, remove }) => (
                            <>
                                {
                                    fields.map((field, index) => (
                                        <Form.Item
                                            required={false}
                                            key={field.key}
                                            initialValue={initialFormValues.names[index]?.feature}
                                            className="w-full"
                                        >
                                            <div  className='flex items-center gap-[30px] w-full'>
                                                <Form.Item
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    style={{marginBottom : 0}}
                                                    className='w-full'
                                                >
                                                    <Input
                                                        style={{
                                                            width:"100%",
                                                            border: "1px solid #8ABEF2",
                                                            height: "56px",
                                                            background: "white",
                                                            borderRadius: "8px",
                                                            outline: "none",
                                                            color: "black",
                                                            fontSize: "18px"
                                                        }}
                                                    />
                                                </Form.Item>
                                                <div>
                                                    {
                                                        fields.length > 0 ? (
                                                            <CiCircleMinus
                                                                size={44}
                                                                className="dynamic-delete-button cursor-pointer text-[#D7263D]"
                                                                onClick={() => remove(field.name)}
                                                            />
                                                        ) 
                                                        : 
                                                        null
                                                    }
                                                </div>
                                            </div>
                                        </Form.Item>
                                    ))
                                }

                                <Form.Item>
                                    <Button
                                        onClick={() => add()}
                                        style={{
                                            height: "56px",
                                            background: "transparent",
                                            borderRadius: "8px",
                                            border: "1px solid #0071E3",
                                            outline: "none",
                                            color: "#0071E3",
                                            fontSize: "18px",
                                            width: "100%",
                                        }}
                                        icon={<PlusOutlined />}
                                    >
                                        {initialFormValues.names[fields.length]?.feature || 'Add field'}
                                    </Button>
                                </Form.Item>
                            </>
                        )
                    }
                </Form.List>   
            </div>  
            <Form.Item  style={{marginBottom: 0}}>
                <Button
                    type="primary" htmlType="submit"
                    style={{
                        height: "56px",
                        background: "#0071E3",
                        borderRadius: "8px",
                        outline: "none",
                        color: "white",
                        fontSize: "18px",
                        width: "100%",
                    }}
                >
                    Update Subscription
                </Button>
            </Form.Item> 
        </Form>
        </div>
    )
}

export default From