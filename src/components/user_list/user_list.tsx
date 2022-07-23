import { useSearchQuery } from '../../store/githubApi';
import { useAppSelector } from '../../store/hooks';

import './user_list.css';

export default function UserList() {
  const { query } = useAppSelector(state => state.search);
  const {isLoading, isError, data} = useSearchQuery(query, {
    skip: query.length < 3,
  });

  return (
    <div className='user-list'>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
      <ul>
        {data?.items.map((item) => <li key={item.id}>{item.login}</li>)}
      </ul>
    </div>
  );
}
