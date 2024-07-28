import {Outlet} from "react-router-dom";
import {GlobalNavigation} from "@/components/GlobalNavigation";

const Layout = () => {
  return (
      <>
        <div className='flex justify-center'>
          <GlobalNavigation />
        </div>
        <Outlet/>
      </>
  )
}

export {Layout};