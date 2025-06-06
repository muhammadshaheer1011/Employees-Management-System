import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [authData,setauthData]=useContext(AuthContext)
    
  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5'>
       <div className='bg-red-400 mb-2 py-3 px-4 flex justify-between rounded'>
            <h2 className='font-medium text-lg w-1/5'>Employee Name</h2>
            <h3 className='font-medium text-lg w-1/5'>New Task</h3>
            <h5 className='font-medium text-lg w-1/5'>Active Task</h5>
            <h5 className='font-medium text-lg w-1/5'>Completed Task</h5>
            <h5 className='font-medium text-lg w-1/5'>Failed</h5>
        </div>
      <div className='overflow-auto'>
          {authData.employees.employees.map(function(elem,idx){
            return  <div key={idx} className='border-2 border-emerald-500 mb-2 py-3 px-4 flex justify-between rounded'>
            <h2 className='font-medium text-lg w-1/5'>{elem.name}</h2>
            <h3 className='font-medium text-lg w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='font-medium text-lg w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='font-medium text-lg w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='font-medium text-lg w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
            
        })}
      </div>

    </div>
  )
}

export default AllTask