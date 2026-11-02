import React from 'react'
import { useState } from 'react'

export default function App() {

    const [value, setValue] = useState(0)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState('')
    const [res, setRes] = useState('Result')

    const Button = [
        { name: 'Positive And Negative', function: () => { value > 0 ? setRes("Positive number") : setRes("Negative number") }, css: 'bg-orange-400 font-bold' },
        { name: 'Even And Odd Numbers', function: () => { value % 2 == 0 ? setRes("even number") : setRes("Odd number") }, css: 'bg-red-700 font-bold' },
        { name: 'Largest Number', function: ()=>{value>value1 ?setRes("First value is largest") :  setRes("2nd value is largest")}, css: 'bg-green-500 font-bold' },
        { name: 'Voting eligibility', function: ()=>{value >=18 ? setRes("Eligible for Voting"):setRes("Not Eligible for voting")}, css: 'bg-blue-600 font-bold' },
        { name: 'Zero, Positive & Negative', function: () => { value = 0 ? setRes("num is zero"): value>0?setRes ("num is Positive"): setRes("num is Negative")}, css: 'bg-orange-400 font-bold' },
        { name: 'Largest Number', function: ()=>{value>value1 && value>value2? setRes("First value is largest") : value1>value && value1>value2 ? setRes("2nd value is largest") : setRes("3rd value is largest")}, css: 'bg-green-500 font-bold' },
        { name: 'Leap Year Or Not', function: () => { value % 4 == 0 && value % 100 != 0 || value % 400 == 0 ? setRes("Leap Year") : setRes("Not Leap Year") }, css: 'bg-green-600 font-bold' },
        { name: 'Vowel & Consonent', function: ()=>{value3=='a' || value3=='e' || value3=='i' || value3=='o' || value3=='u'? setRes("Vowel") : setRes("Consonent")}, css: 'bg-yellow-900 font-bold' },
        { name: 'Buzz & Not Buzz', function: () => { value % 7 == 0 || value % 10 == 7 ? setRes("Buzz") : setRes("Not Buzz") }, css: 'bg-purple-700 font-bold' },
        { name: 'Binary Or Not Binary', function: () => { value == 0 || value == 1 ? setRes("Binary") : setRes("Not Binary") }, css: 'bg-pink-500 font-bold' },
        { name: 'Divisibility check', function: () => {value / 5 == 0 && value / 3 == 0 ? setRes("Divisible by both"): setRes("not divisible")}, css: 'bg-orange-400 font-bold' },
        { name: '', function: () => {}, css: 'bg-orange-400 font-bold' },
        { name: '', function: () => {}, css: 'bg-orange-400 font-bold' },
        { name: '', function: () => {}, css: 'bg-orange-400 font-bold' },
        { name: '', function: () => {}, css: 'bg-orange-400 font-bold' },





    ]
    
    return (
        <div className='flex justify-center items-center min-h-screen bg- bg-black'>
            <div className='bg-white w-130 px-10 rounded-xl'>
                <h1 className='flex justify-center items-center font-semibold text-3xl py-5'> User Input</h1>
                <div className=' flex  '>
                    <input onChange={(e) => { setValue(e.target.value) }} className='shadow-lg bg-gray-50 w-30 ' type='number' placeholder='Enter a number...'></input>
                    <input onChange={(e) => { setValue1(e.target.value1) }} className='shadow-lg bg-gray-50 w-30 ' type='number' placeholder='Enter a number...'></input>
                    <input onChange={(e) => { setValue2(e.target.value2) }} className='shadow-lg bg-gray-50 w-30 ' type='number' placeholder='Enter a number...'></input>
                    <input onChange={(e) => { setValue3(e.target.value3) }} className='shadow-lg bg-gray-50 w-30 ' type='text' placeholder='Enter a text...'></input>
                </div>
                <div className='grid grid-cols-1 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        Button.map((v, i) => (
                            <div>
                                <button onClick={v.function} key={i} className={`${v.css} rounded-md hover:scale-110 duration-300 px-10 ml-1 mr-1 mt-1 mb-1 pl-1 pr-1 pt-1 pb-1 `}>{v.name}</button>

                            </div>
                        ))
                    }
                </div>
                <button className='
                
                font-semibold text-3xl bg-black pt-2  pb-2 pl-2 pr-2 hover: rounded-2xl scale-100 duration-300 text-white mb-5   '>{res}</button>
            </div>
        </div>
    )
}
