import React, { useState, useEffect } from "react";
import { CircularProgress, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/users/userAction';
import { clearStatusState, clearUserState } from '../../store/users/userSlice';
import { useNavigate } from 'react-router-dom';
import style from '../../style/login.module.css'; 

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const { loading, status } = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearStatusState);
        dispatch(clearUserState);
    }, []);

    return (
        <>
            {loading ? (
                <Box style={{ display: "flex" }}><CircularProgress />
                </Box>
            ) : (
                <>
                    {status ? (
                        <>
                            {status === "error" && (
                                <>
                                    <div className={style.errorContainer}>
                                        <div className={style.errorText}>
                                            <h3>An error occurred!</h3>
                                            <button className={style.errorButton} onClick={() => dispatch(clearStatusState())}> Try again! </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={style.loginContainer}>
                                <div className={style.formContainer}></div>
                                <div>
                                    <div className={style.inputMain}>
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
                                            onChange={(e) => setUser({ ...user, password: e.target.value, })}
                                        />
                                        <button className={style.loginButton} onClick={() => dispatch(loginUser({ user, navigate }))}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Login;





// import React, { useState, useEffect } from "react";
// import { CircularProgress, Box } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../store/users/userAction';
// import { clearStatusState, clearUserState } from '../../store/users/userSlice';
// import { useNavigate } from 'react-router-dom';
// import '../../style/login.module.css'



// const Login = () => {
//     const [user, setUser] = useState({
//         username: "",
//         password: "",
//     });

//     const { loading, status } = useSelector(state => state.user);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(clearStatusState);
//         dispatch(clearUserState);
// }, []);


// return (
//   <>
//     { loading ? (
//     <Box style={{ display: "flex" }}><CircularProgress />
//     </Box>
//     ) : (
//      <>
//       { status ? (
//          <>
//            {status === "error" && (
//             <>
//               <div >
//               <div >
//                 <h3>An error occured!</h3>
//                 <button onClick={() => dispatch(clearStatusState()) }> Try again! </button>
//               </div>
//               </div>
//             </>
//             )}
//              </>
//             ) : (
//             <>
//             <div >
//             <div >login form</div>
//              </div>
//             <div >
//             <div >
//             <div >
//               <input type="text" placeholder="Username" onChange={(e) =>
//               setUser({...user, username: e.target.value }) } />
//               <input type="password" placeholder="Password" onChange={(e) =>
//               setUser({...user, password: e.target.value, }) } />
//               <button onClick={() => dispatch(loginUser({user, navigate}))} >Login</button>
//             </div>
//             </div>
//             </div>
//              </>
//                ) }
//                </>
//             ) }
//         </>
//     );
// };

// export default Login;