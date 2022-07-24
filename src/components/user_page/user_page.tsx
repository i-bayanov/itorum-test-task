import { useParams } from 'react-router-dom';

import { useGetReposQuery, useGetUserQuery } from '../../store/githubApi';
import RepoCard from '../repo_card/repo_card';

import './user_page.css';

export default function UserPage() {
  const params = useParams();
  const { isLoading, isError, data } = useGetUserQuery(params.login!);
  const {data: repos} = useGetReposQuery(params.login!);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
      <div className='page-wrapper'>
        <div className='main-info'>
          <img 
            src={data?.avatar_url}
            alt={`${data?.name} avatar`}
          />
          {data?.name && <p className='name'>{data?.name}</p>}
          {data?.company && <p className='company'>{data?.company}</p>}
          <a
            href={data?.html_url}
            target='_blank'
            rel="noreferrer"
            className='github'
          >GitHub</a>
        </div>
        <div className='repos'>
          {repos?.map((repo) => <RepoCard key={repo.id} {...repo}/>)}
        </div>
      </div>
    </>
  );
}