import { Link, useParams } from 'react-router-dom';

import { useSearchQuery } from '../../store/githubApi';
import { useAppSelector } from '../../store/hooks';

import UserCard from '../user_card/user_card';

import './user_list.css';

export default function UserList() {
  const { num } = useParams();
  const pageNum = Number(num) || 1;
  const { query } = useAppSelector(state => state.search);
  const {isFetching, isError, data} = useSearchQuery(
    { q: query, page: pageNum },
    { skip: query.length < 3 },
  );
  const pagesTotal = Math.ceil(data?.total_count! / 9);
  const isEverythingOK = query.length >= 3 && !isFetching && !isError;
  const isThereAnythingToShow = Boolean(data?.items.length);

  return (
    <div className='user-list'>
      {isFetching && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
      {isEverythingOK && isThereAnythingToShow
        && <>
          <div className='list-wrapper'>
            {data?.items.map((item) => <UserCard key={item.id} {...item}/>)}
          </div>
          <div className='prev-next'>
            <Link
              to={`/page${pageNum - 1}`}
              className={pageNum === 1 ? 'disabled-link' : ''}
            >&lt; PREV.</Link>
            <Link
              to={`/page${pageNum + 1}`}
              className={pageNum === pagesTotal ? 'disabled-link' : ''}
            >NEXT &gt;</Link>
          </div>
        </>
      }
      {isEverythingOK && !isThereAnythingToShow
        && <div>Nothing found</div>
      }
    </div>
  );
}
