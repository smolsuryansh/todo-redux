import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPen, FaRegStar, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6'
import { TfiBell } from 'react-icons/tfi';
import { CiCalendar } from 'react-icons/ci';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdClose } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { removeTodo, toggleCompletion, togglePriority, updateTodo } from '../features/todo/todoSlice';

const TodosDetails = ({ selectedTodo, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState(selectedTodo.text);

    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.find((todo) => todo.id === selectedTodo.id));

    const handleUpdateTodo = () => {
        if (input.trim().length === 0 || input === todo.text) {
            return;
        }
        dispatch(updateTodo({ id: todo.id, text: input }));
        setIsEditing(false);
    };

    const handlePriority = (id) => {
        dispatch(togglePriority(id));
    };

    const handleCompletion = (id) => {
        dispatch(toggleCompletion(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
        onClose();
    };

    return (
        <div className="text-white">
            <div className="py-2 mt-[64px]">
                <hr className="border-t border-green-600 opacity-[0.3]" />
            </div>

            <div className="flex justify-between items-center px-5 my-6">
                <div className="flex items-center justify-start gap-3 w-[85%]">

                    <div
                        onClick={() => handleCompletion(todo.id)}
                        className="text-2xl hover:cursor-pointer"
                    >
                        {todo.completion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    </div>

                    <div className="flex flex-row items-center gap-4 text-lg overflow-y-hidden custom-scrollbar">
                        {isEditing ? (
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onBlur={handleUpdateTodo}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleUpdateTodo();
                                    if (e.key === 'Escape') setIsEditing(false);
                                }}
                                autoFocus
                                className="bg-transparent border-b border-white focus:outline-none text-white"
                            />
                        ) : (
                            <div
                                onClick={() => setIsEditing(true)}
                                className="flex hover:underline hover:cursor-pointer gap-4 group items-center w-full"
                            >
                                <span className='flex-1 overflow-x-auto whitespace-nowrap max-w-full custom-scrollbar font-semibold'>{todo.text}</span>

                                <FaPen className='invisible group-hover:visible' />
                            </div>
                        )}
                    </div>
                </div>

                <div
                    onClick={() => handlePriority(todo.id)}
                    className="hover:cursor-pointer text-2xl"
                >
                    {todo.priority ? <FaStar /> : <FaRegStar />}
                </div>
            </div>

            <div className="py-3">
                <hr className="border-t border-green-600 opacity-[0.3]" />
            </div>

            {/* close and delete section */}
            <div className="absolute inset-x-0 bottom-0">
                <div>
                    <hr className="border-t border-green-600 opacity-[0.6]" />
                </div>

                <div className="flex justify-between items-center pb-16 pt-[24px] px-6">
                    <button onClick={onClose} className="text-4xl">
                        <MdClose />
                    </button>

                    <div className='flex-row items-center text-center'>
                        <h1>Created Today</h1>
                        <h1 className='text-xs opacity-[0.8]'>Due- 19/11/2004</h1>
                    </div>

                    <button
                        onClick={() => handleRemoveTodo(todo.id)}
                        className="text-4xl"
                    >
                        <RiDeleteBin6Fill />
                    </button>
                </div>
            </div>

            <div className='text-2xl flex items-center justify-start gap-6 py-3 px-2'>

                <FaPlus />
                <div className='text-lg'>
                    Add Step
                </div>

            </div>

            <div className="my-2">
                <hr className="border-t border-green-600 opacity-[0.3]" />
            </div>

            <div className='text-2xl flex items-center justify-start gap-6 py-3 px-2'>

                <TfiBell />
                <div className='text-lg'>
                    Set Reminder
                </div>

            </div>

            <div className='my-2'>
                <hr className="border-t border-green-600 opacity-[0.3]" />
            </div>

            <div className='text-2xl flex items-center justify-start gap-6 py-3 px-2'>

                <CiCalendar />
                <div className='text-lg'>
                    Add Due Date
                </div>

            </div>

            <div className='my-2'>
                <hr className="border-t border-green-600 opacity-[0.3]" />
            </div>
        </div>
    );
};

export default TodosDetails;
