import React from 'react';
import { useRef } from 'react';
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser";
import { message } from 'antd'

const SignupForm = () => {

    const formRef = useRef(null);

    const validate = values => {
        const errors = {};

        if (!values.user_name) {
            errors.user_name = 'Required';
        } else if (values.user_name.length > 15) {
            errors.user_name = 'Must be 15 characters or less';
        }

        if (!values.message) {
            errors.message = 'Required';
        } else if (values.message.length < 1) {
            errors.message = 'Must be 20 characters or less';
        }

        if (!values.user_email) {
            errors.user_email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
            errors.user_email = 'Invalid email address';
        }

        return errors;
    };


    const handleSubmit = (values, { resetForm }) => {
        emailjs
            .sendForm('service_cxltusg', 'template_n4ugqpm', formRef.current, '8yVj8UO37Cm2AMGEA')
        message.loading('Sending message')
            .then(
                () => {
                    message.success('Message sent', 2);
                    resetForm({ values: '' });
                },
                () => {
                    message.error(
                        'Message not sent. Try again or email me at davidmccaig1@gmail.com',
                        4
                    );
                }
            );
    };

    const formik = useFormik({
        initialValues: {
            user_name: '',
            message: '',
            user_email: '',
        },
        validate,
        onSubmit: handleSubmit,
    });



    return (
        <form className="flex flex-col text-center w-full mb-12" ref={formRef} onSubmit={formik.handleSubmit}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please dont hesitate to reach out if you have any questions</p>
            <label className="" htmlFor="user_name">First Name</label>
            <input
                id="user_name"
                name="user_name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_name}
            />
            {formik.touched.user_name && formik.errors.user_name ? (
                <div>{formik.errors.user_name}</div>
            ) : null}
            <div className="">
                <label className="" htmlFor="user_email">Email Address</label>
                <input
                    className="rounded border-gray-400 w-full h-8"
                    id="user_email"
                    name="user_email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_email}
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                    <div>{formik.errors.user_email}</div>
                ) : null}
            </div>
            <label className="block text-sm text-gray-500" htmlFor="message">Message</label>
            <textarea
                className="w-full rounded border-gray-400"
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm