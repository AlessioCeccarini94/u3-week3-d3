import { Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

const Favorites = () => {
  const favorites = useSelector((state) => {
    return state.jobs.content
  })
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={10}>
        <ul className="list-group">
          {favorites.map((job, index) => (
            <>
              <li
                className="my-4 d-flex justify-content-between"
                key={index.id}
              >
                <p>{job.title}</p>
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch({ type: "REMMOVE_FAVORITE", payload: job })
                  }
                >
                  Remove Favorite
                </Button>
              </li>
            </>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favorites
