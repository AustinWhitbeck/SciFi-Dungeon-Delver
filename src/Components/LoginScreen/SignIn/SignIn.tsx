

// CSS import //
import { FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../ContextProvider/UserContextProvider';
import './SignIn.css';


const SignIn = () => {

    // imported state
    const { updateUserName}  = useContext(UserContext);
    
    // hidden variable
    const [ hidden, setHidden ] = useState({
        userName: "",
        classes: "hidden"
    });

    // Navigate to go to next page
    // const navigate = useNavigate();


    // Functions
    const handleUserNameSubmit = (e: FormEvent) => {
            e.preventDefault();
            updateUserName(loginInfo.userName);
            // navigate('/CharacterSelect')
            setHidden({userName: "hidden", classes: ""});
    }

    const [loginInfo, setLoginInfo] = useState({
        userName: "",
        password: ""
    })

    const newName = (e: any) => setLoginInfo({userName: e.target.value, password: loginInfo.password})

    return(
        <main className={`SignInContainer ${hidden.userName}`}>
            <p>What is your Name?</p>
            <form action="submit" onSubmit={handleUserNameSubmit}>
                <div className="InputContainer">
                    <label htmlFor="username">Character Name: </label>
                    <input type="text" minLength={1} maxLength={15} name="username" placeholder="Name" value={loginInfo.userName} onChange={newName}/>
                </div>
                {/* <div className="InputContainer">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" placeholder="Password" />
                </div> */}
                <button className={hidden.userName}>Finalize</button>
            </form>
            <section className={hidden.classes}>
            <Link to="/CharacterSelect"><button>Choose your Class</button></Link>
            </section>
        </main>
    )
}

export default SignIn;

