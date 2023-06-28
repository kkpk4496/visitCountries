import './index.css'

const CountriesList = props => {
  const {initialCountriesList, onClickButton} = props
  const {id, name, isVisited} = initialCountriesList

  const onChangeButton = () => {
    onClickButton(id)
  }

  return (
    <li className="list-container">
      <p>{name}</p>
      {isVisited ? (
        <p className="visited1">Visited</p>
      ) : (
        <button type="button" className="button" onClick={onChangeButton}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
