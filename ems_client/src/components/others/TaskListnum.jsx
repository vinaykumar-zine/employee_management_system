import React from 'react';

const TaskListnum = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto w-full mt-10 gap-5 py-5 px-3'>
      <div className='rounded-xl flex-shrink-0 w-[300px] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      
    </div>
  );
}

export default TaskListnum;
