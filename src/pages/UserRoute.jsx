import { Routes, Route } from 'react-router-dom';
import RegisterUser from "../components/users/RegisterUser";
import LoginUser from '../components/users/LoginUser';
import LogOutUser from '../components/users/LogOutUser';
const UserRoute = () => {
    return (
      <>
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path='logout' element = {<LogOutUser />} />

        </Routes>
      </>
    );
  };
  
  export default UserRoute;