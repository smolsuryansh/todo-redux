import React, { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCompletion, togglePriority } from '../features/todo/todoSlice';
import AddTodos from './AddTodos';
import TodosDetails from './TodosDetails';
import SideBar from './SideBar';

const Todos = ({ viewMode, searchTerm, showSideBar }) => {

    const [selectedTodo, setSelectedTodo] = useState(null)

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const filteredTodos = todos.filter((todo) => 
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // for completed and pending todos:
    const pendingTodos = filteredTodos.filter((todo) => !todo.completion);
    const completedTodos = filteredTodos.filter((todo) => todo.completion);

    const handlePriority = (id) => {
        dispatch(togglePriority(id));
    }

    const handleCompletion = (id) => {
        dispatch(toggleCompletion(id));
    }

    const handleTodoClick = (todo) => {
        setSelectedTodo(todo);
    }

    const handleCloseTodoDetails = () => {
        setSelectedTodo(null);
    }

    return (
        <>
            <div className="flex h-full text-white gap-x-3">

                {showSideBar && (
                    <div className='relative bg-[#232323] w-1/3 h-[100svh] transition-all duration-300'>
                        <SideBar />
                    </div>
                )}

                <div
                    className={`py-5 overflow-y-auto transition-all duration-300 ${selectedTodo ? 'w-[85%] pr-[1px]' : 'w-full px-[8rem]'
                        } ${showSideBar ? 'w-[85%] pl-[1px]' : 'w-full px-[8rem]'}`}
                >

                    <AddTodos />

                    <div className='overflow-hidden h-auto'>
                        <div className='text-white mt-[-36px]'>

                            {viewMode === 'list' ? (
                                <ul className='list-none'>

                                    <div className='mb-9'>
                                        <hr className='border-t border-green-600 opacity-[0.3]' />
                                    </div>

                                    {pendingTodos.map((todo) => (

                                        <li key={todo.id} className={`items-center rounded pb-8 ${selectedTodo?.id === todo.id ? 'bg-green-700 text-white' : ''}`}>

                                            <div className='mb-9'>
                                                <hr className='border-t border-green-600 opacity-[0.3]' />
                                            </div>

                                            <div className='flex justify-between px-5'>
                                                <div className='flex items-center justify-start gap-3 w-[90%]'>

                                                    <div onClick={() => handleCompletion(todo.id)} className='text-2xl'>{todo.completion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>

                                                    <div onClick={() => handleTodoClick(todo)} className='flex flex-row items-center gap-4 hover:underline hover:cursor-pointer text-lg overflow-y-hidden w-[80vw]  custom-scrollbar font-semibold'>{todo.text}</div>

                                                </div>

                                                <div onClick={() => handlePriority(todo.id)} className='hover:cursor-pointer text-2xl'>
                                                    {todo.priority ? <FaStar /> : <FaRegStar />}
                                                </div>
                                            </div>

                                        </li>

                                    ))}
                                </ul>
                            ) : (
                                <div className='grid grid-cols-4 gap-4 mt-7'>
                                    {pendingTodos.map((todo) => (

                                        <div key={todo.id} className={`flex justify-between items-center mt-[8px] px-5 py-16 rounded border-[1px] border-green-600 border-opacity-[0.4]  ${selectedTodo?.id === todo.id ? 'bg-green-700 text-white' : ''}`}>

                                            <div className='flex items-center justify-start gap-3 w-[85%]'>

                                                <div onClick={() => handleCompletion(todo.id)} className='text-2xl'>{todo.completion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>

                                                <div onClick={() => handleTodoClick(todo)} className='flex flex-row items-center gap-4 hover:underline hover:cursor-pointer text-lg font-semibold overflow-y-hidden custom-scrollbar'>{todo.text}</div>

                                            </div>

                                            <div onClick={() => handlePriority(todo.id)} className='hover:cursor-pointer text-2xl'>
                                                {todo.priority ? <FaStar /> : <FaRegStar />}
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            )}
                        </div>

                        <h1 className='text-white mt-[2rem] mb-[-28px] text-xl'>{completedTodos.length > 0 ? 'Completed:' : ''}</h1>
                        <div className='text-white my-7'>

                            {viewMode === 'list' ? (
                                <ul className='list-none'>
                                    {completedTodos.map((todo) => (

                                        <li key={todo.id} className={`items-center rounded pb-8 ${selectedTodo?.id === todo.id ? 'bg-green-700 text-white' : ''}`}>

                                            <div className='mb-9'>
                                                <hr className='border-t border-green-600 opacity-[0.3]' />
                                            </div>

                                            <div className='flex justify-between px-5'>

                                                <div className='flex items-center justify-start gap-3 w-[90%]'>

                                                    <div onClick={() => handleCompletion(todo.id)} className='text-2xl'>{todo.completion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>

                                                    <div onClick={() => handleTodoClick(todo)} className='flex flex-row items-center gap-4 hover:underline hover:cursor-pointer text-lg font-semibold overflow-y-hidden w-[80vw]  custom-scrollbar'><s>{todo.text}</s></div>

                                                </div>

                                                <div onClick={() => handlePriority(todo.id)} className='hover:cursor-pointer text-2xl'>
                                                    {todo.priority ? <FaStar /> : <FaRegStar />}
                                                </div>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className='grid grid-cols-4 gap-4'>
                                    {completedTodos.map((todo) => (

                                        <div key={todo.id} className={`flex justify-between items-center px-5 py-16 rounded border-[1px] border-green-600 border-opacity-[0.4] ${selectedTodo?.id === todo.id ? 'bg-green-700 text-white' : ''}`}>

                                            <div className='flex items-center justify-start gap-3 w-[85%]'>

                                                <div onClick={() => handleCompletion(todo.id)} className='text-2xl'>{todo.completion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>

                                                <div onClick={() => handleTodoClick(todo)} className='flex flex-row items-center gap-4 hover:underline hover:cursor-pointer text-lg font-semibold overflow-y-hidden custom-scrollbar'><s>{todo.text}</s></div>

                                            </div>

                                            <div onClick={() => handlePriority(todo.id)} className='hover:cursor-pointer text-2xl'>
                                                {todo.priority ? <FaStar /> : <FaRegStar />}
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            )}

                        </div>
                    </div>

                </div>

                {/* Todo details */}
                {selectedTodo && (
                    <div className="relative w-1/3 h-[90svh] bg-[#2C2C2C] text-white p-5 overflow-y-auto transition-all duration-300">
                        <TodosDetails selectedTodo={selectedTodo} onClose={handleCloseTodoDetails} />
                    </div>
                )}
            </div >
        </>
    )
}

export default Todos