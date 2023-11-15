import {Component} from 'react'
import TabItem from '../TabItem'
import GreetingItem from '../GreetingItem'
import './index.css'

class MultiGreetings extends Component {
  state = {activeBtnId: ''}

  changeButton = id => {
    this.setState({activeBtnId: id})
  }

  getFilteredList = () => {
    const {activeBtnId} = this.state
    const {languageGreetingsList} = this.props
    const filteredList = languageGreetingsList.filter(
      each => each.id === activeBtnId,
    )
    return filteredList
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeBtnId} = this.state
    const filteredList = this.getFilteredList()
    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>

        <ul className="list-container">
          {languageGreetingsList.map(each => (
            <TabItem
              tabItemDetails={each}
              key={each.id}
              changeButton={this.changeButton}
              isActive={activeBtnId === each.id}
            />
          ))}
        </ul>

        <ul className="greeting-container">
          {filteredList.map(each => (
            <GreetingItem greetingDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default MultiGreetings
