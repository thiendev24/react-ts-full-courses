import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/blog");
  };
  return (
    <>
      <h3>Blog id: {id}</h3>
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={() => handleBack()}>
          <span>
            <FontAwesomeIcon icon={faBackward} />
          </span>{" "}
          Back
        </Button>
      </div>
    </>
  );
};

export default BlogDetail;
