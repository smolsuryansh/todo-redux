import React from 'react'

import { PiClipboardText } from "react-icons/pi";
import { CiCalendar } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa'
import { FiMap } from "react-icons/fi";
import { MdAssignmentInd } from "react-icons/md";
import { FaPlus } from 'react-icons/fa6'
import { useSelector } from 'react-redux';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const SideBar = () => {

    const todos = useSelector((state) => state.todos);

    const completedTodos = todos.filter((todo) => todo.completion).length;
    const pendingTodos = todos.length - completedTodos;

    const data = [
        { name: 'Completed', value: completedTodos },
        { name: 'Pending', value: pendingTodos }
    ];

    const COLORS = ['#3F9142', '#A0EDA3']

    return (
        <div className='flex items-center justify-center text-white'>
            <div className='mt-12 w-3/4 h-full'>
                <div className='mt-20 bg-[#2c2c2c] relative'>
                    <div className='flex items-center justify-center mb-10'>
                        <img
                            src="/vite.svg"
                            alt="image"
                            width={128}
                            height={128}
                            className='absolute -top-14'
                        />
                    </div>
                    <h1 className='text-center pt-12 mb-3'>Hey, ABCD</h1>

                    <div className='mx-6 bg-[#1f1f1f] font-semibold'>
                        <div className='py-4 px-6'>
                            <div className='flex items-center my-5 gap-2'>
                                <PiClipboardText className='text-2xl' /><h1>All Tasks</h1>
                            </div>

                            <div className='flex items-center my-5 gap-2'>
                                <CiCalendar className='text-2xl' /><h1>Today</h1>
                            </div>

                            <div className='flex items-center my-5 gap-2'>
                                <FaRegStar className='text-2xl' /><h1>Important</h1>
                            </div>

                            <div className='flex items-center my-5 gap-2'>
                                <FiMap className='text-2xl' /><h1>Planned</h1>
                            </div>

                            <div className='flex items-center my-5 gap-2'>
                                <MdAssignmentInd className='text-2xl' /><h1>Assigned to me</h1>
                            </div>
                        </div>
                    </div>

                    <div className='mx-6 mt-3 bg-[#1f1f1f] font-semibold'>
                        <div className='py-4 px-6'>
                            <div className='flex items-center my-5 gap-2'>
                                <FaPlus className='text-2xl' /><h1>Add List</h1>
                            </div>
                        </div>
                    </div>

                    <div className='mx-3 mt-3 bg-[#1f1f1f] font-semibold'>
                        <div className='py-4 px-6'>

                            <h3 className='text-center text-white mb-2'>Total Todos: {pendingTodos + completedTodos}</h3>

                            <div className='flex items-center justify-center'>
                                <PieChart width={190} height={190}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </div>

                            <div className='flex items-center justify-between mt-2'>
                                <span className='bg-[#A0EDA3] text-[#A0EDA3]'>.</span><h1>Pending: {pendingTodos}</h1>
                                <span className='bg-[#3F9142] text-[#3F9142]'>.</span><h1>Completed: {completedTodos}</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SideBar