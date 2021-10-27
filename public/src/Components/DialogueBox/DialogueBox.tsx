

// CSS
import './DialogueBox.css';

interface Props {
    dialogueText: string;
}

const DialogueBox = ({dialogueText}: Props) => {

    return(
        <main className="DialogueBoxContainer">
            <section className="TextContainer">
                <text className="DialogueSection">{dialogueText} </text>
            </section>
        </main>
    )
}

export default DialogueBox;