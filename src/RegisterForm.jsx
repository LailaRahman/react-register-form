import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

// Yup validation schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain at least 1 number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

const RegisterForm = () => {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSuccess(true);
    reset();
  };

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      {success && <p className="success-message">Registration Successful!</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Full Name" {...register("fullName")} />
          {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
        </div>

        <div>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div>
          <input type="password" placeholder="Password" {...register("password")} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div>
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("terms")} /> I accept the Terms & Conditions
          </label>
          {errors.terms && <p className="error-message">{errors.terms.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;