

// CSS import //
import { FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../ContextProvider/UserContextProvider';
import './SignIn.css';


const SignIn = () => {

    // imported state
    const {userStats, updateUserName} = useContext(UserContext);
    
    // temp username


    // Functions
    const handleUserNameSubmit = (e: FormEvent) => {
            e.preventDefault();
            updateUserName(loginInfo.userName);
    }

    const [loginInfo, setLoginInfo] = useState({
        userName: "",
        password: ""
    })

    const newName = (e: any) => setLoginInfo({userName: e.target.value, password: loginInfo.password})

    return(
        <main className="SignInContainer">
            <p>What is your Name?</p>
            <form action="submit" onSubmit={handleUserNameSubmit}>
                <div className="InputContainer">
                    <label htmlFor="username">Character Name: </label>
                    <input type="text" name="username" placeholder="Name" value={loginInfo.userName} onChange={newName}/>
                </div>
                {/* <div className="InputContainer">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" placeholder="Password" />
                </div> */}
                <button>Finalize</button>
            </form>
            <Link to="/CharacterSelect"><button>Choose your Class</button></Link>
        </main>
    )
}

export default SignIn;