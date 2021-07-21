import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required(' *Full Name is Required'),
    username: yup
        .string()
        .trim()
        .required(' *Username is Required')
        .min(6, ' *Username must be at least 6 characters long')
})

export default formSchema