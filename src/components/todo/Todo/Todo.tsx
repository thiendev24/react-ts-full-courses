import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type TodoProps = {
  id: string;
  title: string;
  time: string;
  handleDeleteTodo: (id: string) => void;
};
const Todo = ({ id, title, time, handleDeleteTodo }: TodoProps) => {
  return (
    <>
      <div>
        Todo: {title}
        &nbsp; &nbsp;
        <span className="text-danger">
          <FontAwesomeIcon
            icon={faTimes}
            role="button"
            onClick={() => handleDeleteTodo(id)}
            size="lg"
          />
        </span>
      </div>
      <p>id: {id}</p>
      <p>time: {moment(time).format("LLLL")}</p>
    </>
  );
};

export default Todo;
