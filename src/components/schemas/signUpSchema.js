import * as Yup from "yup"

// yup is used for importing errors with respect to formik

export const signUpSchema = Yup.object({
    firstName:Yup.string().min(4).max(15).required("Please enter your name as per specified format"),
    lastName: Yup.string().min(2).max(15).required("Please follow the specific format"),
    email : Yup.string().email().required("Invalid Email Id"),
    password:Yup.string().max(15).min(8).required(),
    confirmPassword:Yup.string().oneOf([Yup.ref("password") , null] , "Password Does Not Match")
})