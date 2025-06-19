interface VoteOptionsProps {
    onVote: (vote: 'good' | 'neutral' | 'bad') => void;
    onReset: () => void;
    canReset: boolean;
}


const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
    return (
        <>
            <button onClick={() => onVote('good')}>Good</button>
            <button onClick={() => onVote('neutral')}>Neutral</button>
            <button onClick={() => onVote('bad')}>Bad</button>
            <button onClick={() => onReset()} disabled={!canReset}>Reset</button>

        </>

    )
}
export default VoteOptions;