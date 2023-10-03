import React from "react";
import { useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const SignupForm = () => {
  const formRef = useRef(null);

  const validate = (values) => {
    const errors = {};

    if (!values.user_name) {
      errors.user_name = "Required";
    } else if (values.user_name.length > 15) {
      errors.user_name = "Must be 15 characters or less";
    }

    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length < 1) {
      errors.message = "Must be 20 characters or less";
    }

    if (!values.user_email) {
      errors.user_email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)
    ) {
      errors.user_email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    emailjs.sendForm(
      "service_cxltusg",
      "template_n4ugqpm",
      formRef.current,
      "8yVj8UO37Cm2AMGEA"
    );
    message.loading("Sending message").then(
      (res) => {
        message.success("Message sent", 2);
        resetForm({ values: "" });
      },
      () => {
        message.error(
          "Message not sent. Try again or email me at davidmccaig1@gmail.com",
          4
        );
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      message: "",
      user_email: "",
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <form
      className="flex flex-col w-96 lg:w-[36rem]"
      ref={formRef}
      onSubmit={formik.handleSubmit}
    >
      <div className="text-center">
        <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900 sm:text-3xl dark:text-white">
          Contact Me
        </h1>
        <p className="mx-auto leading-relaxed text-base text-gray-500 mb-4 max-w-lg dark:text-white">
        I&apos;m currently seeking new opportunities, my inbox is always open. Whether you have a question or just want to say hi, please don&apos;t hesitate to reach out.        </p>
      </div>
      <label className="mb-1 mt-5 dark:text-white" htmlFor="user_name">
        Name
      </label>
      <input
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        id="user_name"
        name="user_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_name}
      />
      {formik.touched.user_name && formik.errors.user_name ? (
        <div className="text-red-500 mt-1">{formik.errors.user_name}</div>
      ) : null}
      <div className="mt-6">
        <label className="mb-1 dark:text-white" htmlFor="user_email">
          Email Address
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          id="user_email"
          name="user_email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_email}
        />
        {formik.touched.user_email && formik.errors.user_email ? (
          <div className="text-red-500 mt-1">{formik.errors.user_email}</div>
        ) : null}
      </div>
      <label className="mb-1 mt-6 dark:text-white" htmlFor="message">
        Message
      </label>
      <textarea
        className="resize-none block p-2.5 h-20 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div className="text-red-500 mt-1">{formik.errors.message}</div>
      ) : null}

      <button
        className="transition duration-1000 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 text-white font-bold py-2 px-4 rounded-full mt-12"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
