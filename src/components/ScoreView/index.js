import './index.css'

const ScoreView = props => {
  const {score} = props
  console.log('scoreview')
  return (
    <div className="main-div">
      <div>
        <h1>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </h1>
      </div>
      <div>
        <p>Score</p>
        <p className="para">{score}</p>
      </div>
    </div>
  )
}

export default ScoreView
