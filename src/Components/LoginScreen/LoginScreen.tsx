import SignIn from "./SignIn/SignIn";

// CSS import //
import './LoginScreen.css';



const LoginScreen = () => {

    return(
        <main className="LoginScreenContainer">

            <h2 className="LoginTitle"> Vigilante for Hire</h2>
            <SignIn/>
        </main>
    )
}


export default LoginScreen;