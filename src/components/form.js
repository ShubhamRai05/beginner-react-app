import { useFormik } from "formik";


initialValues = {
    firstName:"",
    lastName:"",
    password:"",
    confirmPassword:"",
    email:""
}

const LoginForm = () => {
   const {values , errors , handleChange , handleBlur , handleSubmit} =  useFormik({
        initialValues:initialValues,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    console.log(values);
    // console.log(values);
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


                    <div className="form-element">    {/* confirm password */}
                        <label htmlFor="confirmPassowrd">Confirm Password:</label>
                        <input
                            type="password"
                            id="confrimPassword"
                            name="confrimPassword"
                            autoComplete="off"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                        />
                    </div>


                    <div className="form-element">
                        {/* submit button */}
                        <button type="submit">Registration</button></div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;