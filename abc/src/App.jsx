import React from 'react'
import { useState } from 'react'

export default function App() {

    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const [res, setRes] = useState('Result')

    const Button = [
        { name: 'Pos And Neg', function: () => { value > 0 ? setRes("Pos") : setRes("Neg") }, css: 'bg-orange-400 font-bold' },
        { name: 'Even And Odd', function: () => { value % 2 == 0 ? setRes("even") : setRes("Odd") }, css: 'bg-red-700 font-bold' },
        { name: 'Buzz & Not Buzz', function: () => { value % 7 == 0 || value % 10 == 7 ? setRes("Buzz") : setRes("Not Buzz") }, css: 'bg-purple-700 font-bold' },
        { name: 'Binary Or Not Binary', function: () => { value == 0 || value == 1 ? setRes("Binary") : setRes("Not Binary") }, css: 'bg-pink-500 font-bold' },
        { name: 'Leap Year Or Not', function: () => { value % 4 == 0 && value % 100 != 0 || value % 400 == 0 ? setRes("Leap Year") : setRes("Not Leap YearF") }, css: 'bg-yellow-500 font-bold' },
        { name: 'Vowel & Consonent', function: ()=>{value2=='a' || value2=='e' || value2=='i' || value2=='o' || value2=='u'? setRes("Vowel"): setRes("Consonent")}, css: 'bg-yellow-900 font-bold' },
        { name: '', function: '', css: 'bg-green-500 font-bold' },
        { name: '', function: '', css: 'bg-blue-600 font-bold' },
    ]

    return (
        <div className='flex justify-center items-center min-h-screen bg- bg-black'>
            <div className='bg-white w-150 px-10 rounded-xl'>
                <h1 className='flex justify-center items-center font-semibold text-3xl py-5'> User Input</h1>
                <div className='py-2 flex justify-center items-center gap-3'>
                    <input onChange={(e) => { setValue(e.target.value) }} className='shadow-lg bg-gray-50 w-full px-5' type='number' placeholder='Enter a number...'></input>
                    <input onChange={(e) => { setValue2(e.target.value) }} className='shadow-lg bg-gray-50 w-full px-5' type='text' placeholder='Enter a number...'></input>
                </div>
                <div className='grid grid-cols-1 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        Button.map((v, i) => (
                            <div>
                                <button onClick={v.function} key={i} className={`${v.css} rounded-md hover:scale-110 duration-300 px-10 `}>{v.name}</button>

                            </div>
                        ))
                    }
                </div>
                <p className='flex justify-center items-center font-semibold text-3xl py-5 '>{res}</p>
            </div>
        </div>
    )
}
