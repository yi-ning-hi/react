import { useState, useEffect } from 'react';
import userRawData from '../data/users.json';
import './UserList.css'

function UserList(props) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //開啟載入指示器
    setLoading(true);

    //載入資料
    setUsers(userRawData);

    //2秒後關閉指示器
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const userListTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userRawData.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  return (
    <>
      <div className="container">
        <div className="center">{loading ? spinner : userListTable}</div>
      </div>
    </>
  );
}

export default UserList;
