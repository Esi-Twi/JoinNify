import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function GeneralLayout() {
  const location = useLocation()

  const hideFooterRoutes = ["/user/profile"]

  const hideFooter = hideFooterRoutes.includes(location.pathname)

  return (
    <>
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  )
}