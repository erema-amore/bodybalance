
import React, { useState, useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/users/userAction";
import { clearStatusState } from "../../store/users/userSlice";
import { useNavigate } from "react-router-dom";
import style from '../../style/register.module.css'

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <div className={style.registerContainer}>
      {loading ? (
        <Box style={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {status ? (
            <>
              {status === "error" && (
                <div className={style.errorContainer}>
                  <div className={style.errorText}>
                    <h3>An error occurred!</h3>
                    <button className={style.errorButton} onClick={() => dispatch(clearStatusState())}> Try again!</button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className={style.formContainer}>
                
              </div>
              <div className={style.formContainer}>
                <div className={style.inputFieldContainer}>
                  <input
                    className={style.inputField}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                  />
                  <input
                    className={style.inputField}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                  <button className={style.registerButton} onClick={() => dispatch(registerUser({ user, navigate }))}> Register </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Register;






// import React, { useState, useEffect } from 'react';
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../../store/users/userAction";
// import { clearStatusState } from "../../store/users/userSlice";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [user, setUser] = useState({
//       username: "",
//       password: "",
//   });

//   const { loading, status } = useSelector((state) => state.user);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//       dispatch(clearStatusState());
//   }, []);

//   return (
//       <>
//       {loading ? (
//         <>
//           <Box style={{ display: "flex" }}><CircularProgress />
//           </Box>
//         </>
//           ) : (
//         <>
//           {status ? (
//         <>
//            {status === "error" && (
//             <>
//               <div >
//                 <div >
//                   <h3>An error occured!</h3>
//                    <button onClick={() => dispatch(clearStatusState()) }> Try again!</button>
//                 </div>
//               </div>
//             </>
//              )}
//          </>
//             ) : (
//            <>
//             <div >
//               <div >
//                 Register form
//               </div>
//             </div>

//             <div >
//                <div >               
//                 <div >
//                   <input type="text" placeholder="Username" onChange={(e) => 
//                    setUser({...user,username: e.target.value,}) } />
//                   <input type="password"placeholder="Password"onChange={(e) =>
//                     setUser({...user, password: e.target.value, }) } />
//                   <button onClick={() =>dispatch( registerUser({user,navigate, }))}> Register </button>
//                    </div>
//                 </div>
//             </div>
//            </>
//                   )}
//               </>
//           )}
//       </>
//   );
// };

// export default Register;