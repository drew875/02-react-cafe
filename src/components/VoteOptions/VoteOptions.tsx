import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
    onVote: (vote: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}


const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
    return (
        <>
            <button onClick={() => onVote('good')}>Good</button>
            <button onClick={() => onVote('neutral')}>Neutral</button>
            <button onClick={() => onVote('bad')}>Bad</button>
            {canReset && <button onClick={onReset} >Reset</button>}

        </>

    )
}
export default VoteOptions;