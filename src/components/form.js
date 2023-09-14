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
            // console.log(values)
            action.resetForm()
            navigate("/")
        },
    })
    // console.log(errors);
    return (
        <>
            <div className="h-95vh w-screen  overflow-hidden  bg-slate-600 text-center">
                <form onSubmit={handleSubmit} className="flex flex-wrap mt-10 ">
                    <div className="form-element w-full ">
                        {/* firstName */}
                        <div className="mb-5 text-2xl font-bold" > <label htmlFor="firstName" >First Name:</label></div>

                        <input type="firstName"
                            autoComplete="off"
                            name="firstName"
                            id="firstName"
                            placeholder="Name"
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                            className="placeholder:italic placeholder:text-slate-400  bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3  ml-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                        />
                        {(errors.firstName && touched.firstName ? <h2 className="text-red-500 font-semibold text-lg" >{errors.firstName}</h2> : null)}

                    </div>
                    <div className="form-element w-full mt-10">
                        {/* LastName */}
                        <div className="mb-5 text-2xl font-bold"><label htmlFor="lastName">Last Name:</label></div>
                        <input type="lastName"
                            autoComplete="off"
                            name="lastName"
                            id="lastName"
                            placeholder="last Name"
                            onChange={handleChange}
                            value={values.lastName}
                            onBlur={handleBlur}
                            className="placeholder:italic placeholder:text-slate-400  bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3  ml-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "

                        />
                        {(errors.lastName && touched.lastName) ? <h2 className="text-red-500 font-semibold text-lg">{errors.lastName}</h2> : null}

                    </div>
                    <div className="form-element w-full mt-10">
                        {/* email */}
                        <div className="mb-5 text-2xl font-bold"><label htmlFor="email">Email:</label></div>
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className="placeholder:italic placeholder:text-slate-400  bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3  ml-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                        />
                        {(errors.email && touched.email ? <h2 className="text-red-500 font-semibold text-lg">{errors.email}</h2> : null)}

                    </div>

                    <div className="form-element w-full mt-10">
                        {/* password */}
                        <div className="mb-5 text-2xl font-bold"><label htmlFor="password">Password:</label></div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="off"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className="placeholder:italic placeholder:text-slate-400  bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3  ml-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                        />
                        {(errors.password && touched.email ? <h2 className="text-red-500 font-semibold text-lg">{errors.password}</h2> : null)}

                    </div>

                    <div className="w-full mt-10">    {/* confirm password */}
                        <div className="mb-5 text-2xl font-bold"><label htmlFor="confirmPassword">Confirm Password:</label></div>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            className="placeholder:italic placeholder:text-slate-400  bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3  ml-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        />
                        {(errors.confirmPassword && touched.confirmPassword ? <h2 className="text-red-500 font-semibold text-lg">{errors.confirmPassword}</h2> : null)}

                    </div>
                     <div className="w-full mb-4">
                        <button type="submit" className="p-3 rounded-xl 
                          bg-slate-400 text-slate-50 mr-10 mt-5" >Registration</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;