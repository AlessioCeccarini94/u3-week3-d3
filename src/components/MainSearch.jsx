import { useState } from "react"
import { Container, Row, Col, Form, Spinner } from "react-bootstrap"
import Job from "./Job"
import { useDispatch, useSelector } from "react-redux"
import { getSearchAction } from "../redux/actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")

  const jobs = useSelector((state) => {
    return state.jobs.content
  })
  const loading = useSelector((state) => {
    return state.jobs.loading
  })
  const error = useSelector((state) => {
    return state.jobs.error
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getSearchAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
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
          {loading && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" />
            </div>
          )}
          {error && <div>Something went wrong</div>}

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
