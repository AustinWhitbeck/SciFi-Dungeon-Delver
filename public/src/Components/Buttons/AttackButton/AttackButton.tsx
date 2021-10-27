
// CSS
import './AttackButton.css';

interface Props {
    attack: () => void;
    attackType: string;
}

const AttackButton = ({attack, attackType}: Props) => {

    return(

            <button className="AttackButton" onClick={attack}>{attackType}</button>
        
    )
}

export default AttackButton;