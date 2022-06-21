import React from 'react'

const SelectLanguage = () => {

  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]

  return (
    <nav>
      <ul>
        {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
    </nav>
  )
}

export default SelectLanguage
