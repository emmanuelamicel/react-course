import React, { useState } from 'react'
import { connect } from 'react-redux'
import { asyncAddCity, removeCity } from '../store/actions/actionCreators'

const Cities = ({ cities, addCity, removeCity }) => {
  const [inputCity, setInputCity] = useState("")

  const onChangeInputCity = e => {
    setInputCity(e.target.value)
  }

  const onSubmitCity = () => {
    addCity(inputCity)
    setInputCity("")
  }

  const onRemoveCity = city => {
    console.log("Suppression de la ville " + city)
    removeCity(city)
  }

  return (
    <>
      <h2>Liste des villes à visiter</h2>
      <div>
        <label htmlFor="city">Ajouter:</label>
        <input type="text" id="city" value={inputCity} onChange={onChangeInputCity} />
        <button onClick={onSubmitCity}>Ajouter</button>
      </div>
      <ul>
        {cities.map((c, i) => (<li key={i}>{c} <span onClick={() => onRemoveCity(c)}>❌</span></li>))}
      </ul>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities.citiesToVisit,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCity: city => dispatch(asyncAddCity(city)),
    removeCity: city => dispatch(removeCity(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
