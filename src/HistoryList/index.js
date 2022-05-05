import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryList extends Component {
  state = {inputString: '', initialHistoryListOut: ''}

  searchInput = event => {
    this.setState({inputString: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const deleteListItemFun = id => {
      const {initialHistoryListOut} = this.state
      const {initialHistoryList} = this.props
      if (initialHistoryListOut === '') {
        const initialHistoryListOutTemp = initialHistoryList.filter(
          eachitem => eachitem.id !== id,
        )
        this.setState({initialHistoryListOut: initialHistoryListOutTemp})
      } else {
        // const {initialHistoryListOut} = this.state
        const initialHistoryListOutTemp = initialHistoryListOut.filter(
          eachitem => eachitem.id !== id,
        )
        this.setState({initialHistoryListOut: initialHistoryListOutTemp})
      }
      // this.setState()
      // initialHistoryListOut = initialHistoryList.filter(
      //   eachitem => eachitem.id !== id,
      // )
      console.log(this)
      //   console.log(`${id} can delete now`)
    }
    const {initialHistoryList} = this.props
    const {initialHistoryListOut, inputString} = this.state
    // let initialHistoryListOut
    const initialHistoryListOutm =
      initialHistoryListOut === '' ? initialHistoryList : initialHistoryListOut

    // console.log(initialHistoryList)
    const searchList = initialHistoryListOutm.filter(eachItem => {
      const {title} = eachItem
      const tempTitle = title.toLowerCase()
      if (tempTitle.includes(inputString)) {
        return true
      }
      return false
    })
    // console.log(searchList)
    return (
      <div className="main-container">
        <div className="history-input-container">
          <div className="history-container">
            <img
              className="history-image"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>

          <div className="search-container">
            <img
              className="search-image"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input onChange={this.searchInput} type="search" />
          </div>
        </div>
        <div className="history-list-container">
          <ul>
            {searchList.length !== 0 ? (
              searchList.map(eachItem => (
                <HistoryItem
                  deleteListItemFun={deleteListItemFun}
                  key={eachItem.id}
                  initialHistoryList={eachItem}
                />
              ))
            ) : (
              <p>There is no history to show</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default HistoryList
