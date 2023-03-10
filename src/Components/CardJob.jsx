import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import "moment/locale/it";
import { addToFav } from "../redux/actions";

const JobCard = (props) => {
  const myJobs = useSelector((state) => state.favourites);
  moment.locale("it");
  const dispatch = useDispatch();
  return (
    <Card.Body className="d-flex justify-content-between border-bottom">
      <div className="col-11">
        <Link
          to={props?.singleJob?.url}
          target={"_blank"}
          className="text-decoration-none"
        >
          <h5>{props?.singleJob?.title}</h5>
        </Link>
        <h6 className="fw-bolder">
          {props?.singleJob?.company_name.toUpperCase()}
        </h6>
        <h6>
          <SlLocationPin className="me-2" />
          {props?.singleJob?.candidate_required_location}
        </h6>
        <h6 className="text-secondary">
          {props?.singleJob?.job_type.toUpperCase()}
        </h6>
        <h6 className="text-secondary fst-italic">
          {moment(props?.singleJob?.publication_date).format("DD MM YY") ===
          moment().format("DD MM YY")
            ? moment(props?.singleJob?.publication_date).fromNow()
            : moment(props?.singleJob?.publication_date).format("YYYY") ===
              moment().format("YYYY")
            ? moment(props?.singleJob?.publication_date).format(
                "ddd D MMMM [alle] H:mm "
              )
            : moment(props?.singleJob?.publication_date).format(
                "ddd d MMMM YYYY [alle] H:mm "
              )}
        </h6>
      </div>
      <div className="d-flex align-items-center text-align col-1">
        <div className="bookmarkJob p-3 rounded-circle">
          {myJobs
            ?.map((e) => {
              return e._id;
            })
            .includes(props?.singleJob._id) ? (
            <BsFillBookmarkFill style={{ fontSize: "1.6em" }} />
          ) : (
            <BsBookmark
              style={{ fontSize: "1.6em" }}
              onClick={() => dispatch(addToFav(props.singleJob))}
            />
          )}
        </div>
      </div>
    </Card.Body>
  );
};

export default JobCard;
