import React from 'react'
import Header from '../others/Header'
import TaskListnum from '../others/TaskListnum'
import TaskList from '../tasklist/TaskList'

const EmplyeeDashboard = () => {
  return (
    <div  className='p-10 bg-[#1c1c1c] h-screen'>
        <Header />
        <TaskListnum />
        <TaskList />
    </div>
  )
}

export default EmplyeeDashboard