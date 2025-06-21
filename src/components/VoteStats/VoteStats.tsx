import type { Votes } from "../../types/votes";


interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}


const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
    return (
        <div >
            <p >Good: <strong>{votes.good}</strong></p>
            <p >Neutral: <strong>{votes.neutral}</strong></p>
            <p >Bad: <strong>{votes.bad}</strong></p>
            <p >Total: <strong>{totalVotes}</strong></p>
            <p >Positive: <strong>{positiveRate}</strong></p>
        </div>
    )
}
export default VoteStats;