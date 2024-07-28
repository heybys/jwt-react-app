import {Outlet} from "react-router-dom";

const AuthGuardLayout = () => {
  return (
      <>
        <Outlet/>
      </>
  )
}

export {AuthGuardLayout};