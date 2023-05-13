

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "./Redux/Slices/userSlice";
import { selectUser } from "./Redux/Slices/userSlice";
import { useSelector } from "react-redux";
function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  const use = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    
    console.log('user local',use)
    if (use) {
      dispatch(LOGIN(use));
    }
  }, []);
  return (
    <div className="App">
        <BrowserRouter>

        <Navbar/>
                <div className="pages">
                  <Routes>


                    <Route path='/'
                    element={user?<Home/>:<Navigate to='/login'/>}
                    
                   />
                    <Route path='/login'
                    
                    
                    element={!user?<Login/>:<Navigate to='/'/>}
                    
                   />
                    <Route path='/signup'
                    element={<Signup/>}
                    
                   />
                   

                    

                  </Routes>

                  
                </div>
            
        </BrowserRouter>
     
    </div>
  );
}

export default App;
