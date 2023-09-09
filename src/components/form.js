import { useFormik } from "formik";
import { signUpSchema } from "./schemas/signUpSchema"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: ""
}

const LoginForm = () => {
    const navigate = useNavigate()
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
            navigate("/")
        },
    })
    console.log(errors);
    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-element">
                        {/* firstName */}
                        <label htmlFor="firstName">First Name:</label>
                        <input type="firstName"
                            autoComplete="off"
                            name="firstName"
                            id="firstName"
                            placeholder="Name"
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                        />
                    </div>
                    {(errors.firstName && touched.firstName ? <h2>{errors.firstName}</h2> : null)}
                    <div className="form-element">
                        {/* LastName */}
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="lastName"
                            autoComplete="off"
                            name="lastName"
                            id="lastName"
                            placeholder="last Name"
                            onChange={handleChange}
                            value={values.lastName}
                            onBlur={handleBlur}

                        />
                    </div>
                    {(errors.lastName && touched.lastName) ? <h2>{errors.lastName}</h2> : null}
                    <div className="form-element">
                        {/* email */}
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>
                    {(errors.email && touched.email ? <h2>{errors.email}</h2> : null)}

                    <div className="form-element">
                        {/* password */}
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="off"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}

                        />
                    </div>
                    {(errors.password && touched.email ? <h2>{errors.password}</h2> : null)}

                    <div className="form-element">    {/* confirm password */}
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                        />
                    </div>
                    {(errors.confirmPassword && touched.confirmPassword ? <h2>{errors.confirmPassword}</h2> : null)}
                    <div className="form-element">
                        {/* submit button */}
                        <button type="submit">Registration</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;