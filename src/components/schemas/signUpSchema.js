import * as Yup from "yup"

export const signUpSchema = Yup.object({
    firstName:Yup.string().min(4).max(15).required("Please enter your name"),
    lastName: Yup.string().min(2).max(15).required("Please write your lastname"),
    email : Yup.string().email().required("Please write the correct email"),
    password:Yup.string().max(15).min(8).required(),
    confirmPassword:Yup.string().oneOf([Yup.ref("password") , null] , "Password Does Not Match")
})