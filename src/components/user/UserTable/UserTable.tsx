import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UserDataRow from "../UserDataRow/UserDataRow";
import { UserType } from "../type/UserType";
import UserService from "../../../utils/APIs/user_API/userServices";

const UserTable = () => {
  const [users, setUser] = useState<UserType[]>([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await UserService.getUsers();
        const data: UserType[] =
          res && res.data && res.data.data ? res.data.data : [];

        setUser(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    }
    getUsers();
  }, []);

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
          {users.length > 0 ? (
            users.map((user) => {
              return <UserDataRow user={user} key={user.id} />;
            })
          ) : (
            <tr>
              <td colSpan={5}>Nothing to show!</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
