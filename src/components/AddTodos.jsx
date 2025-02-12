import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { TfiBell } from 'react-icons/tfi';
import { RxLoop } from 'react-icons/rx';
import { CiCalendar } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';


const AddTodos = () => {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim().length === 0) {
            return;
        }
        dispatch(addTodo(input));
        setInput('')
    }


    return (
        <div className='relative w-full text-white items-left justify-top mt-8'>

            <div className='py-1'>
                <h1 className='flex text-green-600'>To Do <span className='text-xl flex items-center'><MdOutlineArrowDropDown /></span></h1>
                <div className='my-3'>
                    <hr className='border-t border-green-600 opacity-[0.3]' />
                </div>
            </div>

            <form onSubmit={addTodoHandler} className='bg-[#2F3630] w-full h-auto'>
                <div className='w-full h-[9rem] py-10'>
                    <input type="text" placeholder='Add a Task' value={input} onChange={(e) => setInput(e.target.value)} className='bg-transparent w-full h-4/3 outline-none p-5 text-white placeholder:text-white' />
                </div>
                <div className='flex items-center justify-between px-4'>
                    <div className='flex flex-row mb-5 gap-12 text-3xl'>
                        <TfiBell
                            className='hover:cursor-pointer' 
                        />
                        <RxLoop 
                            className='scale-x-[-1] hover:cursor-pointer' 
                        />
                        <CiCalendar
                            className='hover:cursor-pointer'
                        />
                    </div>

                    <div className='mb-5'>
                        <button type='submit' className='rounded-lg bg-[#347136] px-4 py-2 text-sm shadow-lg'>
                            ADD TASK
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddTodos