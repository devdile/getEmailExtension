import { Route, Routes } from 'react-router-dom';
import SignIn from './Account/signin';
import SignUp from './Account/signup';
import Dashboard from './Home/Dashboard';
import ForgotPassword from './Account/forgotpassword';
import Help from './Home/Help';


function AppRouting(){
    return(
        <Routes>
        <Route exact path='/' element={< SignIn />}></Route>
        <Route exact path='/signup' element={< SignUp />}></Route>
        <Route exact path='/dashboard' element={< Dashboard />}></Route>
        <Route exact path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route exact path="/help" element={<Help/>}></Route>
        </Routes>
    )
  
};
export default AppRouting;