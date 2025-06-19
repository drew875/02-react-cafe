import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Vote, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const App = () => {

  const [votes, setVotes] = useState<Vote>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }))
  }

  const canReset = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;


  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  return (
    <div className={css.app}>

      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset} />
      <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
      <Notification message={totalVotes === 0 ? "No feedback yet" : ""} />
    </div>
  )
}

export default App;