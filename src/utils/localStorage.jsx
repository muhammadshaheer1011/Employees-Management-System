export const setLocalStorage = async () => {
try{
    const employeeResponse=await fetch('/employees.json');
    const employeesData=await employeeResponse.json();
    localStorage.setItem('employees',JSON.stringify(employeesData));

    const adminsResponse=await fetch('/admins.json');
    const adminsData=await adminsResponse.json();
    localStorage.setItem('admins',JSON.stringify(adminsData));
}catch(error){
    console.log('Error loading data into localStorage',error)
}
};

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    
    const admins=JSON.parse(localStorage.getItem('admins'))

    return {employees,admins}
    

};

