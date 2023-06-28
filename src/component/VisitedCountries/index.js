import './index.css'

const VisitedCountries = props => {
  const {countriesList, deleteVisitCountry} = props
  const {id, name, imageUrl, isVisited} = countriesList

  const onDeleteButton = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visitedlist-container">
      {isVisited ? (
        <div>
          <img src={imageUrl} alt="thumbnail" className="image" />
          <div className="delete-container">
            <p>{name}</p>
            <button
              type="button"
              className="delete-button"
              onClick={onDeleteButton}
            >
              Remove
            </button>
          </div>
        </div>
      ) : null}
    </li>
  )
}

export default VisitedCountries
