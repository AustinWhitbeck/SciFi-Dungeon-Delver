import { useContext } from "react";
import { UserContext } from "../../ContextProvider/UserContextProvider";


// CSS
import './ActivePlayer.css';


const ActivePlayer = () => {

    const {userStats } = useContext(UserContext);


    return(
        <main className="ActivePlayerContainer">
            <h3>Player: {userStats.userName}</h3>
            <p> Health: {userStats.currentHealth} / {userStats.health} </p>
            <section> 
                <img className="UserImage" src={userStats.image} alt={userStats.name} />
            </section>
            <section>
                <ul>
                    <li>Class Name: {userStats.name}</li>
                    <li>Magic Attack: {userStats.magAtk}</li>
                    <li>Magic Defense: {userStats.magDef}</li>
                    <li>Physical Attack: {userStats.physAtk}</li>
                    <li>Physical Defense: {userStats.physDef}</li>
                </ul>
            </section>
        </main>
    )

}

export default ActivePlayer;