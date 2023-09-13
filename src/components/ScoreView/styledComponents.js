import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid white;
  margin: 10px;
  color: black;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: columns;
`

export const ScoreNames = styled.h1`
  color: white;
`
export const ScorePara = styled.p`
  color: white;
`

export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  padding: 5px;
  margin: 10px;
`
export const ScoreCount = styled.p`
  color: white;
`
