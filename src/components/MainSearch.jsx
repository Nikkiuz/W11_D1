import { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import FavIndicator from './FavIndicator'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsAction } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(getJobsAction(query))
  }

  const searchResult = useSelector((reduxState) => {
    return reduxState.jobs.jobResult
  })

  useEffect(() => {
    if (query) {
      dispatch(getJobsAction(query))
    }
  }, [query])

  console.log(searchResult)

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <FavIndicator />
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {searchResult?.data?.length > 0 ? (
            searchResult?.data?.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
          ) : (
            <p>No results</p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
