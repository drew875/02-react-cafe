type Props = {
    message: string;
}
const Notification = ({ message }: Props) => {
    if (!message) return null;

    return (
        <p>
            No feedback yet
        </p>
    )
}

export default Notification;