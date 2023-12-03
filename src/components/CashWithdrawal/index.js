// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  incrementAmount = (uniqueNo, value) => {
    const {amount} = this.state
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="con">
        <div className="sub-con">
          <div className="logo">
            <p className="p">S</p>
          </div>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="sub-con2">
          <p className="balance">Your Balance</p>
          <div>
            <p className="amount">{amount}</p>
            <p className="text">InRupees</p>
          </div>
        </div>
        <p className="amount">Withdraw</p>
        <p className="balance">CHOOSE SUM (IN RUPEES)</p>
        <div>
          <ul className="total-box">
            {denominationsList.map(eachUser => (
              <DenominationItem
                denominations={eachUser}
                key={eachUser.uniqueNo}
                incrementAmount={this.incrementAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
