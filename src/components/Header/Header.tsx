import React from "react";
import { nanoid } from 'nanoid';
import { Formik } from "formik";
import './header.scss';
// import type { RootState } from '../../redux/store';
// import { useSelector, useDispatch } from 'react-redux';
// import {useSimbolName} from '../../redux/slices/testSlice';
import ItemMenu from "../ItemMenu/ItemMenu";
//import { User } from "../../redux/slices/userSlice";

const Header = () => {

// const {name} = useSelector((state: RootState) => state.test);
// const dispatch = useDispatch();
const menu: Array<string> = ['FullName', 'Gender', 'JobType', 'Country', 'Finance']

    return (
        <div>
            <Formik initialValues={{
                fullName: '',
                Gender: '',
                JobType: '',
                Country: '',
                Finance: ''
            }}
            onSubmit={(values) => {console.log(values)}}>

                {({values, handleChange, handleSubmit})=> (
                    <form action="/" className="form" method="GET" onSubmit={handleSubmit}>
                    {menu.map((item, i) => {
                        
                        return <ItemMenu placeholder={item} id={nanoid()} key={i} value={Object.keys(values)[i]} handleChange={handleChange}/>
                    })}
    
                    <button type="submit" className="form__buttonForm">Register User</button>
                </form>
                )}
            </Formik>
          
        </div>
    )
}

export default Header;