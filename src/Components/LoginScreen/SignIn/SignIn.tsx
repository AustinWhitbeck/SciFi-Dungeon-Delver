

// CSS import //
import { Link } from 'react-router-dom';
import './SignIn.css';


const SignIn = () => {

    return(
        <main className="SignInContainer">
            <p>Sign In</p>
            <form action="submit">
                <div className="InputContainer">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="InputContainer">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" placeholder="Password" />
                </div>
                <button>Submit</button>
            </form>
            <Link to="/CharacterSelect"><button>Character Select (temp)</button></Link>
        </main>
    )
}

export default SignIn;