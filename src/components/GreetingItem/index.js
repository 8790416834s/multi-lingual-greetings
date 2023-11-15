import './index.css'

const GreetingItem = props => {
  const {greetingDetails} = props
  const {imageUrl, imageAltText} = greetingDetails
  return (
    <li className="greeting-item">
      <img src={imageUrl} alt={imageAltText} className="greeting-image" />
    </li>
  )
}
export default GreetingItem
