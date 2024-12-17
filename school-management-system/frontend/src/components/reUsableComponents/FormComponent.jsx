import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import InputFieldComponent from './InputfieldComponent';
import ButtonComponent from './ButtonComponent';

const FormComponent = ({
  fieldConfigs,
  buttonConfig,
  inputConfig,
  apiEndpoint,
  heading,
  forgotPassword,
  title,
  paragraph,
}) => {
  
  // Initialize form values for text fields
  const initialFormValues = fieldConfigs.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  // Yup validation schema
  const validationSchema = Yup.object(
    fieldConfigs.reduce((schema, field) => {
      if (field.name === 'identifier') {
        // Validate email format only
        schema[field.name] = Yup.string()
          .required(`${field.label} is required`)
          .test('valid-email', 'Enter a valid email', (value) => {
            // Regex for validating email format
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value);
          });
      } else if (field.type.toLowerCase().includes('password') && field.name !== 'confirmPassword') {
        schema[field.name] = Yup.string()
          .required(`${field.label} is required`)
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*\d)[A-Za-z\d@]{8,}$/,
            'Password must contain at least 8 characters, including uppercase, lowercase, number, and @'
          );
      } else if (field.name === 'confirmPassword') {
        schema[field.name] = Yup.string()
          .required('Confirm password is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match');
      
      } else if (field.required) {
        schema[field.name] = Yup.string().required(`${field.label} is required`);
      }
      return schema;
    }, {})
  );

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await apiEndpoint(values);
      resetForm();
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false); // Stop submitting state
    }
  };

  return (
    <div className="bg-light-gray p-6 max-w-xl w-full md:max-w-lg lg:max-w-lg lg:p-4 xl:max-w-md xl:p-4">
      {heading && (
        <div className="bg-dark-gray p-4 rounded-t-lg w-full mx-auto">
          <h2 className=" font-heading text-center text-xl font-bold">{heading}</h2>
        </div>
      )}

      {paragraph && (
        <p className="text-textGray mt-2">
          {paragraph}
        </p>
      )}

      
      {title && (
        <div className="font-bold text-md mt-2">
          {title}
        </div>
      )}

      <Formik
        initialValues={initialFormValues} // Set initial values
        validationSchema={validationSchema} // Apply Yup validation schema
        onSubmit={handleSubmit} // Handle form submission
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
          <Form className="space-y-4 mt-4">
            {fieldConfigs.map((field) => (
              <InputFieldComponent
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.name]}
                error={errors[field.name]}
                touched={touched[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                inputWidth={inputConfig.inputWidth}
                inputHeight={inputConfig.inputHeight}
                icon={field.icon}
              />
            ))}

            {forgotPassword && (
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-dark-gray hover:underline hover:text-black">
                  Forgot Password?
                </Link>
              </div>
            )}

               

            <div className="mt-4">
              <ButtonComponent
                label={buttonConfig.label}
                type={buttonConfig.type}
                disabled={isSubmitting}
                btnWidth={buttonConfig.btnWidth}
                btnHeight={buttonConfig.btnHeight}
                variant={buttonConfig.variant}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
