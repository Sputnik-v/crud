import React from "react";
import { nanoid } from 'nanoid';
import { Formik } from "formik";
import './header.scss';

import { useDispatch } from 'react-redux';

import ItemMenu from "../ItemMenu/ItemMenu";
import { addNewUser } from "../../redux/slices/userSlice";
//import { RootState } from "../../redux/store";
//import { User } from "../../redux/slices/userSlice";

const Header = () => {

const dispatch = useDispatch();
const menu: Array<string> = ['fullName', 'gender', 'jobType', 'country', 'finance'];


    return (
        <div>
            <Formik initialValues={{
                fullName: '',
                gender: '',
                jobType: '',
                country: '',
                finance: ''
            }}
            onSubmit={(values, actions) => {dispatch(addNewUser(values)); actions.resetForm()}}>

                {({values, handleChange, handleSubmit})=> (
                    <form action="/" className="form" method="GET" onSubmit={handleSubmit}>
                    {menu.map((item, i) => {
                        
                        return <ItemMenu placeholder={item} id={nanoid()} key={i} forValue={Object.values(values)[i]} value={Object.keys(values)[i]} handleChange={handleChange}/>
                    })}
    
                    <button type="submit" className="form__buttonForm">Register User</button>
                </form>
                )}
            </Formik>
          
        </div>
    )
}

export default Header;