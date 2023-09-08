import { useFormik } from "formik";

const LoginForm = () => {
    return (
        <>
            <div className="form-container">
                <form>
                    <div className="form-element">
                        {/* firstName */}
                        <label htmlFor="firstName">First Name:</label>
                        <input type="firstName"
                            autoComplete="off"
                            name="firstName"
                            id="firstName"
                            placeholder="Name"
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
                        />
                    </div>

                    <div className="form-element">
                        {/* email */}
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                        />
                    </div>


                    <div className="form-element">
                        {/* password */}
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autocomplete="off"
                            placeholder="Password"

                        />
                    </div>


                    <div className="form-element">    {/* confirm password */}
                        <label htmlFor="confirmPassowrd">Confirm Password:</label>
                        <input
                            type="password"
                            id="confrimPassword"
                            name="confrimPassword"
                            autocomplete="off"
                            placeholder="Confirm Password"
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