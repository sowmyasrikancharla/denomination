// Write your code here
import './index.css'
import {on} from 'events'

const DenominationItem = props => {
  const {denominations, incrementAmount} = props
  const {id, value, uniqueNo} = denominations
  const onIncrement = () => {
    incrementAmount(uniqueNo, value)
  }

  return (
    <li className="dot">
      <button className="box" onClick={onIncrement}>
        <p className="amount">{value}</p>
      </button>
    </li>
  )
}
export default DenominationItem
