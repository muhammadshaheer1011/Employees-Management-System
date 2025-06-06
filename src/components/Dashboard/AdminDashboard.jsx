import React from 'react';
import { Header } from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';


export default function AdminDashboard(props) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} />
        <CreateTask/>
        <AllTask/>

    </div>
  );
}
