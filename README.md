# React Register Form – Week 5 Assignment

## 📌 Assignment Overview

This project is a Registration Form built using **React**, **React Hook Form**, and **Yup validation**.

The goal of this assignment was to create a fully validated form with proper error handling and schema-based validation.

---

## 🛠 Technologies Used

- React
- React Hook Form
- Yup
- @hookform/resolvers
- Vite (for project setup)

---

## 📋 Form Fields & Validation Rules

### 🔹 Full Name
- Required
- Minimum 3 characters

### 🔹 Email
- Required
- Must be a valid email format

### 🔹 Password
- Required
- Minimum 8 characters
- Must include at least 1 number

### 🔹 Confirm Password
- Required
- Must match the Password field

### 🔹 Terms & Conditions
- Must be checked before submitting the form

---

## ⚙️ Form Behavior

- The form is controlled using **React Hook Form**
- Validation is implemented using **Yup schema**
- Error messages are displayed below each invalid field
- On successful submission:
  - Form data is logged using `console.log()`
  - A message is shown: **"Registration Successful!"**

---

## 📂 Project Structure

```
src/
 ├── RegistrationForm.jsx
 ├── App.js
 └── index.js
```

## ▶️ How to Run the Project

1. Clone the repository:

```
git clone https://github.com/LailaRahman/react-register-form.git
```

2. Navigate to the project folder:

```
cd react-register-form
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

---

## ✅ Assignment Checklist

✔ Controlled by React Hook Form  
✔ Yup schema created and connected  
✔ Error messages display correctly  
✔ Confirm password validation works  
✔ Checkbox required validation works  

---

### 👩‍💻 Author
Laila Rahman


