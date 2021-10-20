
interface Props {
    text: string;
}

const DialogueBox = ({text}: Props) => {

    return(
        <main>
            <section>Text: {text}</section>
        </main>
    )
}

export default DialogueBox;