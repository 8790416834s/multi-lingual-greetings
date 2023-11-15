import './index.css'

const TabItem = props => {
  const {tabItemDetails, changeButton, isActive} = props
  const {id, buttonText} = tabItemDetails

  const onChangeButton = () => {
    changeButton(id)
  }

  const activeClassName = isActive ? 'active-tab' : 'inactive-tab'

  return (
    <li className="list-item">
      <button
        type="button"
        className={`${activeClassName}`}
        onClick={onChangeButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
