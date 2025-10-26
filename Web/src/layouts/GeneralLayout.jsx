import {Outlet} from 'react-router-dom'

export default function generalLayout() {
  return (
    <div>
      <div>header</div>
      <Outlet />
      <div>footer</div>
      
    </div>
  )
}
