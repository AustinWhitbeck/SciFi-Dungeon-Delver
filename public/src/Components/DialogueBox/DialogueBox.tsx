

// CSS
import './DialogueBox.css';

interface Props {
    dialogueText: string;
}

const DialogueBox = ({dialogueText}: Props) => {

    return(
        <main className="DialogueBoxContainer">
            <section className="DialogueSection">{dialogueText} </section>
        </main>
    )
}

export default DialogueBox;