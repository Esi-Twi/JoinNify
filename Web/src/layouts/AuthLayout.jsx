import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div data-theme="dark" className='row auth-container'>
            <div className='col-md-6 col-sm-5 my-md-5 auth-sideimg'>
                <img src='../assets/images/meetup2.webp' className='w-100 h-100 img-fluid rounded-top-end-4 rounded-bottom-end-4'/>
            </div>

            <div className='col-md-6 col-sm-7 '>
                <Outlet />
            </div>
        </div>
    )
}
