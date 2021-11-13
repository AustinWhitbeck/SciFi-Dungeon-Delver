import { useContext } from "react";
import { UserContext } from "../../ContextProvider/UserContextProvider";


// CSS
import './ActivePlayer.css';


const ActivePlayer = () => {

    const {userStats } = useContext(UserContext);

    const playerHealthVisual = (userStats.currentHealth / userStats.health) * 100;


    return(
        <main className="ActivePlayerContainer">
            <h3>Player: {userStats.userName}</h3>
            <section> 
                <img className="UserImage" src={userStats.image} alt={userStats.name} />
                <div style={{width: `${playerHealthVisual}%`, height: "50px", backgroundColor: "red"}}></div>
            </section>
            <section>
                {/* <ul>
                    <li>Class Name: {userStats.name}</li>
                    <li>Magic Attack: {userStats.magAtk}</li>
                    <li>Magic Defense: {userStats.magDef}</li>
                    <li>Physical Attack: {userStats.physAtk}</li>
                    <li>Physical Defense: {userStats.physDef}</li>
                </ul> */}
            </section>
        </main>
    )

}

export default ActivePlayer;