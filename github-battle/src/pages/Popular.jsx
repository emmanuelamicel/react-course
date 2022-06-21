import React, { useEffect, useState } from 'react'
import SelectLanguage from './SelectLanguage'
import { fetchRepos } from '../store/actions/actionCreators'
import { connect } from 'react-redux'// Pour connecter mon composant à mon store

const Popular = ({ repos, language, fetchRepos }) => {
  // const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRepos()
    setLoading(false)
  }, [language])

  return (
    <>
      <h1>Page Popular</h1>
      <SelectLanguage />
      {loading ?
        <div>Loading...</div> :
        <ul>
          {repos.map(repo => <li key={repo.id}>
            <img src={repo.owner.avatar_url} alt="" />
            <p>{repo.name}</p>
          </li>)}
        </ul>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    repos: state.popular.repos,
    language: state.popular.language,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: () => dispatch(fetchRepos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
