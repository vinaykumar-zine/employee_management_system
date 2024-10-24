import React, { useState } from 'react'

const Login = (props) => {

    console.log(props)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("form submitted")
        console.log("email: ", email);
        console.log("password: ", password)
        setEmail('');
        setPassword('');
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20 '>
                <form
                    onSubmit={(e) => {

                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required className='outline-none bg-transparent text-white border-2 py-3 text-xl px-5 border-emerald-600 rounded-full placeholder:text-grey-400' type='email' placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className=' mt-5 outline-none bg-transparent text-white border-2 py-3 text-xl px-5 border-emerald-600 rounded-full placeholder:text-grey-400' type='password' placeholder='Enter your password' />
                    <button className=' text-white border-none outline-none mt-10 w-full  text-white border-2 py-3 text-xl px-5 bg-emerald-600 rounded-full'>LogIn</button>
                </form>
            </div>
        </div>
    )
}

export default Login