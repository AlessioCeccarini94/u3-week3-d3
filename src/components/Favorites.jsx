import { Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Favorites = () => {
  const favorites = useSelector((state) => {
    return state.jobs.content
  })
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul className="list-group mx-3">
          {favorites.map((job, index) => (
            <>
              <Row>
                <li
                  className="my-4 d-flex justify-content-between"
                  key={index.id}
                >
                  <Col>
                    <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                  </Col>
                  <Col>
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {job.title}
                    </a>
                  </Col>
                  <Col>
                    <span className="mb-0">{job.title}</span>
                  </Col>
                  <Col>
                    <Button
                      className="ms-3"
                      variant="danger"
                      onClick={() =>
                        dispatch({ type: "REMMOVE_FAVORITE", payload: job })
                      }
                    >
                      Remove Favorite
                    </Button>
                  </Col>
                </li>
              </Row>
            </>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favorites
