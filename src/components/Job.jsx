import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex justify-content-between">
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-around">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          className="d-flex align-items-center m-2"
          onClick={() => {
            // da questo onClick scaturiremo un cambio di stato!
            // per farlo dobbiamo fare il "dispatch" di una "action"
            // in modo da "risvegliare" il reducer!
            dispatch({
              // dobbiamo come minimo specificare il "tipo" dell'azione
              // con una proprietà "type"
              type: 'ADD_TO_FAV',
              payload: data.company_name,
              // payload: bookSelected,
              // qua il payload serve, altrimenti il reducer non saprebbe quale libro aggiungere all'array cart.content!
            })
          }}
        >
          <span className="me-2">AGGIUNGI AI PREFERITI</span>
        </Button>
      </Col>
    </Row>
  )
}

export default Job
