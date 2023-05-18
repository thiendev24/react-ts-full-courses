import { Table } from "react-bootstrap";
import UserDataRow from "../UserDataRow/UserDataRow";
import useFetch from "../../../utils/custom-hook/useFetch";
import { UserType } from "../type/UserType";

const UserTable = () => {
  const url: string = "https://reqres.in/api/users?page=2";
  const { res, isLoading, isError } = useFetch(url);
  console.log(res);

  //const users = res.data ? res.data : [];
  const users: UserType[] = [];

  return (
    <>
      <h3>Covid News</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && users.length > 0 ? (
            users.map((user) => {
              return <UserDataRow user={user} key={user.id} />;
            })
          ) : (
            <tr>
              <td colSpan={5}>Nothing to show!</td>
            </tr>
          )}
          {isLoading && (
            <tr>
              <td colSpan={5}>Loading...</td>
            </tr>
          )}
          {isError && (
            <tr>
              <td colSpan={5}>Something wrong!</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
