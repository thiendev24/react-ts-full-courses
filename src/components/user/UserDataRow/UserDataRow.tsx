import { UserType } from "../type/UserType";

type UserDataRowProps = {
  user: UserType;
};

const UserDataRow = ({ user }: UserDataRowProps) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <img src={user.avatar} alt="" />
      </td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserDataRow;
