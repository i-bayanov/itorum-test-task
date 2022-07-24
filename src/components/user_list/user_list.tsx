import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useSearchQuery } from '../../store/githubApi';
import { useAppSelector, usePageAction } from '../../store/hooks';

import UserCard from '../user_card/user_card';

import './user_list.css';

export default function UserList() {
  const { num } = useParams();
  const pageNum = Number(num) || 1;
  const { query } = useAppSelector(state => state.search);
  const {isFetching, isError, data} = useSearchQuery(
    {q: query, page: pageNum},
    { skip: query.length < 3 },
  );
  const pagesTotal = Math.ceil(data?.total_count! / 9);
  const { updatePage } = usePageAction();

  useEffect(() => { updatePage(pageNum); });

  return (
    <div className='user-list'>
      {isFetching && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
      {query.length >=3
        && !isFetching
        && !isError
        && Boolean(data?.items.length)
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
      {query.length >= 3
        && !isFetching
        && !isError
        && !data?.items.length
        && <div>Nothing found</div>
      }
    </div>
  );
}
