import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div data-theme="dark" className='row auth-container flex-row'>
            <div className='col-xl-6 col-lg-5 auth-sideimg'>
                <img src='../assets/images/black-screen.png'
                    alt="auth img"
                    className='w-100 img-fluid rounded-top-end-4 rounded-bottom-end-4' />
            </div>

            <div className='col-xl-6 col-lg-7'>
                <Outlet />
            </div>
        </div>
    )
}
