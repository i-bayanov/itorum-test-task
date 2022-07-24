import { Link } from 'react-router-dom';
import { IUser } from '../../interfaces_and_types';

import './user_card.css'

export default function UserCard(user: IUser) {
  return (
    <div className='user-card'>
      <Link
        to={`/${user.login}`}
      >
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className='user-avatar'
        />
        <div>
          <p className='user-login'>{user.login}</p>
          <p className='user-type'>Type: {user.type}</p>
        </div>
      </Link>
    </div>
  );
}