import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// impariamo a LEGGERE dallo stato di Redux
import { useSelector } from 'react-redux'

const FavIndicator = () => {
  const navigate = useNavigate()

  const favArray = useSelector((reduxState) => {
    // reduxState è l'intero oggetto di stato contenuto in Redux
    // dovete ritornare la porzione che vi interessa
    return reduxState.companies.content // []
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/favourites')}
        className="d-flex align-items-center"
      >
        <h5>
          {' '}
          Fav Companies{' '}
          <span className="ms-2">
            {favArray.length}
            {/* 0 */}
            {/* qui dentro non voglio più uno zero fisso! */}
            {/* voglio leggere la lunghezza di cart.content dentro Redux! */}
          </span>
        </h5>
      </Button>
    </div>
  )
}

export default FavIndicator
