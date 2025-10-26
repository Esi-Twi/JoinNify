import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div data-theme="dark" className='row auth-container'>
            <div className='col-md-7 auth-sideimg '>
                <img src='../assets/img/banner.png'/>

            </div>

            <div className='col-md-5'>
                <Outlet />
            </div>
        </div>
    )
}
