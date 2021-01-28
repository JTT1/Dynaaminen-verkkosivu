import './App.css';
import {useState} from 'react'

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [alcohol, setAlcohol] = useState(0)

  function laskut(e) {
    e.preventDefault()
    const litrat = bottles * 0.33
    const grammat = litrat * 8 * 4.5
    const palaminen = weight / 10
    const grammat2 = grammat - (palaminen * time)

    if (gender === 'male') {
      const vastaus = grammat2 / (weight * 0.7)
      setAlcohol(vastaus);
    } else {
      const vastaus = grammat2 / (weight * 0.6)
      setAlcohol(vastaus);
    }
  }

  return (
    <form className="container" onSubmit={laskut}>
        <div>
          <h3>Calculating alcohol blood level</h3>
        </div>
          <div>
            <label className="form-label">Weight</label>
            <input type="number" className="form-control" style={{width: 150}} value={weight} onChange={e => setWeight(e.target.value)}/>
          </div>
          <div>
            <label className="form-label">Bottles</label>
            <input type="number" className="form-control" style={{width: 75}} value={bottles} onChange={e => setBottles(e.target.value)}/>
          </div>
          <div>
            <label className="form-label">Time</label>
            <input type="number" className="form-control" style={{width: 75}} value={time} onChange={e => setTime(e.target.value)}/>
          </div>
          <div>
            <label>Gender</label>
            <div className="form-check">
              <input type="radio" id="male" className="form-check-input" name="gender" value="male" onChange={e => setGender(e.target.value)}/><label for="male" className="form-check-label">Mies</label>
            </div>
            <div className="form-check">
              <input type="radio" id="female" className="form-check-input" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label for="female" className="form-check-label">Nainen</label>
            </div>
          </div>
          <div className="tulostus">
            <output>Your alcohol blood level is: {alcohol.toFixed(2)}</output>
          </div>
          <div>
            <button className="btn btn-primary">Laske veren alkoholipitoisuus</button>
          </div>
      </form>
  );
}

export default App;
