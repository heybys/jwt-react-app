import {createBrowserRouter} from "react-router-dom";
import {PostPage} from "../pages/post/PostPage";
import {HomePage} from "../pages/home/HomePage";
import {Layout} from "../components/Layout";
import {AuthGuardLayout} from "../components/AuthGuardLayout";
import {NotFoundPage} from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        element: <AuthGuardLayout/>,
        children: [
          {
            path: '',
            element: <HomePage/>
          },
          {
            path: 'post',
            element: <PostPage/>
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage/>
      },
    ],
  }
])

export {router};