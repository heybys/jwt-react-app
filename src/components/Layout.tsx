import {Outlet} from "react-router-dom";
import {GlobalNavigation} from "@/components/GlobalNavigation";
import {login} from "@/apis/auth/auth";
import useAuth from "@/hook/useAuth";
import {useEffect} from "react";

const Layout = () => {
  const { isAuthenticated, saveTokens } = useAuth();

  useEffect(() => {

    if (isAuthenticated) {
      console.log('ho')
      return;
    }

    const username = 'admin';
    const password = 'admin';

    const authenticate = async () => {
      try {
        const { accessToken, refreshToken } = await login(username, password);
        saveTokens(accessToken, refreshToken);
      } catch (error) {
        console.error('Failed to login:', error);
      }
    };

    authenticate();
  }, [saveTokens]);

  if (!isAuthenticated) {
    return null;
  }

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