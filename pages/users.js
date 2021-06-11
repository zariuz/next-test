import {useState, useEffect} from 'react';
import Link from 'next/link';

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Evgeniy'},
    {id: 2, name: 'Elena'},
  ]);

  return (
    <div>
      <Link href="/">
        <a>Главная</a>
      </Link>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
