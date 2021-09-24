interface Score {
  score: number
  name: string
}

export default function highScoreCheck(
  accuracy: number,
  highScore: Score[]
): boolean {
  return accuracy > highScore[9].score ? true : false
}
