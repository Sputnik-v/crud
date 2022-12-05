import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Formik } from "formik";
import { faker } from '@faker-js/faker';
import './header.scss';

import { useDispatch } from 'react-redux';

import ItemMenu from "../ItemMenu/ItemMenu";
import { addNewUser } from "../../redux/slices/userSlice";
//import { RootState } from "../../redux/store";
//import { User } from "../../redux/slices/userSlice";

const Header = () => {

const [initialValues, setInitialValues] = useState({
    fullName: '',
    gender: '',
    jobType: '',
    country: '',
    finance: ''
});


const updateInitialValues = (e: any) => {

    switch (e.target.id) {
        case 'fullName':
            setInitialValues((prevState) => ({...prevState, fullName: faker.name.fullName()}))
            
            break;
        case 'gender':
            setInitialValues((prevState) => ({...prevState, gender: faker.name.gender()}))
            
            break;   
        case 'jobType':
            setInitialValues((prevState) => ({...prevState, jobType: faker.name.jobType()}))
            break;      
        case 'country':
            setInitialValues((prevState) => ({...prevState, country: faker.address.country()}))
            break;
        case 'finance':
            setInitialValues((prevState) => ({...prevState, finance: faker.finance.amount(200, 550, 0, '$')}))
            break; 
        default:
            break;
    }
}

const dispatch = useDispatch();
const menu: Array<string> = ['fullName', 'gender', 'jobType', 'country', 'finance'];


    return (
        <div>
            <Formik initialValues={initialValues}
            onSubmit={(values, actions) => { dispatch(addNewUser(initialValues)); actions.resetForm()}}>

                {({values, handleChange, handleSubmit})=> (
                    <form action="/" className="form" method="GET" onSubmit={handleSubmit} onClick={e => updateInitialValues(e)}>
                    {menu.map((item, i) => {
                        
                        return <ItemMenu 
                        placeholder={item} 
                        id={nanoid()} key={i} 
                        forValue={Object.values(initialValues)[i]} 
                        value={Object.keys(values)[i]} 
                        handleChange={handleChange} 
                        />
                    })}
    
                    <button type="submit" className="form__buttonForm">Register User</button>
                </form>
                )}
            </Formik>
          
        </div>
    )
}

export default Header;