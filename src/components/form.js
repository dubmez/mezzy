import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export const Form = () => {
    // Init Yup with a schema which is shaped with exactly the register names from useForm below and all your requirements
    // Yup lets you easily change how each registered field should be treated
    // Use oneOf and yup.ref to match password values
    // You can put the error messages in function parens
    const schema = yup.object().shape({

        fullName: yup.string().required("Your full name is required"),
        email: yup.string().required("Your email is required").email(),
        age: yup.number().required("Your age is required").positive().integer().min(18),
        password: yup.string().required("Your password is required").min(4).max(20),
        confirmPassword: yup.string().required("Your password is required").oneOf([yup.ref("password"),null, "Passwords don't match"])
    })

    // init useForm with register and handleSubmit
    // Use the resolver to tell useForm we are using yup with a particular schema
    // Use the formState to write out errors
    const {register, handleSubmit, formState: {errors},
} = useForm({
        resolver: yupResolver(schema)
    }); 

    // func to specify what happens when form is submitted
    const onSubmit = (data) => {
        // Log the data capture by register & onSubmit (object form)
        console.log(data)
    }

    // We use handleSubmit to pass our own ownSubmit func
    // We use register to register each input (similar to name attribute)
    return (

        <div>

        <form onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" placeholder="Bruce Wayne" {...register("fullName")} />
            <input type="email" placeholder="bruce@wayne-enterprises.com" {...register("email")} />
            <input type="number" placeholder="35" {...register("age")} />
            <input type="password" placeholder="Enter password" {...register("password")} />
            <input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
            <input type="submit"/>
        </form>

        {/* Lay out the error text from Yup */}
        <p>{errors.fullName?.message}</p>
        <p>{errors.email?.message}</p>
        <p>{errors.age?.message}</p>
        <p>{errors.password?.message}</p>
        <p>{errors.confirmPassword?.message}</p>

        </div>

    )
}