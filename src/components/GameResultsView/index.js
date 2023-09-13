import './index.css'

const GameResultsView = props => {
  const {choicesList, isShow, checkResult, newArray, text, restartGame} = props
  console.log(newArray)
  return (
    <div>
      {isShow && (
        <div>
          <button
            type="button"
            onClick={() => checkResult(choicesList[0].id)}
            data-testid="rockButton"
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
              className="img1"
            />
          </button>
          <button
            type="button"
            onClick={() => checkResult(choicesList[1].id)}
            data-testid="scissorsButton"
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
              className="img1"
            />
          </button>
          <button
            type="button"
            onClick={() => checkResult(choicesList[2].id)}
            data-testid="paperButton"
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
              className="img1"
            />
          </button>
        </div>
      )}
      {!isShow && (
        <>
          <div>
            <p>YOU</p>
            <img src={newArray[0].imageUrl} alt="your choice" className="img" />
          </div>
          <div>
            <p>Opponent</p>
            <img
              src={newArray[1].imageUrl}
              alt="opponent choice"
              className="img"
            />
          </div>
          <div>
            <p>{text}</p>
            <button type="button" onClick={restartGame}>
              PLAY AGAIN
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default GameResultsView
