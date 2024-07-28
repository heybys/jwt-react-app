import {Outlet} from "react-router-dom";

const AuthGuardLayout = () => {
  return (
      <>
        <div>Secure Area</div>
        <Outlet/>
      </>
  )
}

export {AuthGuardLayout};