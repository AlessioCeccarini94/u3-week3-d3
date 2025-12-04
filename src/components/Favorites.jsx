import { Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromFavoritesAction } from "../redux/actions"

const Favorites = () => {
  const favorites = useSelector((state) => {
    return state.favorites.content
  })
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul className="list-group mx-3">
          {favorites.map((company, index) => (
            <>
              <li
                className="my-4 d-flex w-75 justify-content-between align-items-center"
                key={index}
              >
                <Link to={`/${company}`}>{company}</Link>
                <Button
                  className="ms-3"
                  variant="danger"
                  onClick={() => dispatch(removeFromFavoritesAction(company))}
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
