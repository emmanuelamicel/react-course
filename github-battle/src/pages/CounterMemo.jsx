import React, { useState, memo, useCallback, useEffect } from 'react'

const DummyMessage = ({ message }) => {
  console.log("Render de DummyMessage")
  return <p>{message}</p>
}

const Button = ({ label, onClick }) => {
  console.log("Render de Button")
  return <button onClick={onClick}>{label}</button>
}

const MemoizedDummyMessage = memo(DummyMessage) // Evite que le message soit rendered à chaque fois qu'on change la valeur du compteur

const MemoizedButton = memo(Button)

const CounterMemo = (props) => {
  // Use Callback pour éviter que la fonction fn indéfinie soit toujours rechargée au changement de Compteur, et éviter que mémo ne marche pas
  useEffect(() => props.setLoading(false), [props])
  const fn = useCallback(
    () => {
      console.log("What the hell?!")
    },
    []
  )

  const [counter, setCounter] = useState(0)

  const increment = useCallback(
    () => {
      setCounter(c => c + 1)
    },
    []
  )

  const decrement = useCallback(
    () => {
      setCounter(c => c - 1)
    },
    []
  )

  return (
    <div>
      <p>Compteur: {counter}</p>
      <MemoizedButton label="+1" onClick={increment}/>
      <MemoizedButton label="-1" onClick={decrement}/>
      {/* <button onClick={() => setCounter(c => c + 1)}>+1</button>
      <button onClick={() => setCounter(c => c - 1)}>-1</button> */}
      <MemoizedDummyMessage message="Test de mémo" fn={fn} />
    </div>
  )
}

export default CounterMemo
