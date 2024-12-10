import { Col, Row, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const Favourites = () => {
  // hooks di react-redux

  // cardArray sarà l'array di libri nel carrello in Redux
  const favArray = useSelector((reduxState) => {
    return reduxState.favourites.content
  })

  // otteniamo la funzione di dispatch
  const dispatch = useDispatch()
  console.log('array', favArray)
  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {favArray.map((company, i) => (
            <li key={i} className="my-4">
              <h2>{company}</h2>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAV',
                    payload: i, // 0 per il primo libro, 1 per il secondo etc.
                  })
                }}
              >
                Rimuovi dai preferiti
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favourites
