import './index.css'

function HistoryItem(props) {
  const {initialHistoryList, deleteListItemFun} = props
  const {domainUrl, logoUrl, timeAccessed, title, id} = initialHistoryList

  const buttonClicked = () => {
    deleteListItemFun(id)
    console.log(id, 'buttonClicked')
  }

  return (
    <li>
      <div className="history-item-container">
        <div className="time-container">
          <div className="time">
            <p>{timeAccessed}</p>
          </div>
          <div className="title-img-container">
            <img alt="domain logo" src={logoUrl} />
            <div className="title-domainurl-container">
              <p>{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={buttonClicked} testid="delete">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
