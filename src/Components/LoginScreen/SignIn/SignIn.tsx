

// CSS import //
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
        </main>
    )
}

export default SignIn;