import React from "react"
// https://fr.reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from "prop-types"

const Avatar = ({picture, fullname}) => {
	return (
		<img src={picture} alt={`Profil of ${fullname}`} />
	)
}

const UserCard = ({name, house, img}) => {
	return (
		<div className="card">
			<Avatar picture={img} fullname={`${name} ${house}`}/>
			<div>
				<p>Prénom: {name}</p>
				<p>House: {house}</p>
			</div>
		</div>
	)
}

// Validation de la nature des paramètres en entrée
UserCard.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired, // Va générer un warning
}

export default UserCard