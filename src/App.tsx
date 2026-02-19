import { useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState<number[]>([])

  const generateNumbers = () => {
    const lottoNumbers: number[] = []
    while (lottoNumbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1
      if (!lottoNumbers.includes(num)) {
        lottoNumbers.push(num)
      }
    }
    setNumbers(lottoNumbers.sort((a, b) => a - b))
  }

  const getBallColor = (num: number) => {
    if (num <= 10) return '#fbc400' // Yellow
    if (num <= 20) return '#69c8f2' // Blue
    if (num <= 30) return '#ff7272' // Red
    if (num <= 40) return '#aaaaaa' // Gray
    return '#b0d840' // Green
  }

  return (
    <div className="lotto-container">
      <h1>로또 번호 생성기</h1>
      <div className="ball-container">
        {numbers.length > 0 ? (
          numbers.map((num, index) => (
            <div
              key={index}
              className="ball"
              style={{ backgroundColor: getBallColor(num) }}
            >
              {num}
            </div>
          ))
        ) : (
          <div className="placeholder">행운의 번호를 확인하세요!</div>
        )}
      </div>
      <button className="generate-btn" onClick={generateNumbers}>
        번호 생성하기
      </button>
    </div>
  )
}

export default App
