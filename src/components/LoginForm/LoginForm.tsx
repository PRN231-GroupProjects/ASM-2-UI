import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

    const [error, setError] = useState<string>('')

    const navigate = useNavigate();

    const LoginForm = {
        username: 'admin',
        password: 'admin',
    }

    const {
        register,
        handleSubmit,
        getValues
    } = useForm<typeof LoginForm>({ defaultValues: LoginForm })

    const onSubmit = () => {
        //send data to server and check account
        setError('')
        const { username, password } = getValues()

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('account', JSON.stringify({ username, password }));
            navigate('/AuthorManagement');
            return
        }

        //check account

        // accounts.forEach(account => {
        //     if (account.username === username && account.password === password) {
        //         localStorage.setItem('account', JSON.stringify(account));
        //         navigate('/ReservationForecast')
        //         return
        //     }
        // })
        setError('Account name is admin and password is admin')
        return
    }

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 w-[450px]">
                    <p className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</p>
                    <input {...register('username', { required: true })} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username here !" required />
                </div>
                <div className="mb-3">
                    <p className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your password</p>
                    <input {...register('password', { required: true })} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <p className="mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
        </div>
    );
}