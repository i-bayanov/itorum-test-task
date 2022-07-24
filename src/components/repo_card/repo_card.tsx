import { IRepo } from '../../interfaces_and_types';

import './repo_card.css';

export default function RepoCard(repo: IRepo) {
  const updatedAt = new Date(repo.updated_at);
  const day = updatedAt.getDate().toString().padStart(2, '0');
  const month = (updatedAt.getMonth() + 1).toString().padStart(2, '0');
  const year = updatedAt.getFullYear();

  return (
    <div className='repo-card'>
      <a
        href={repo.html_url}
        target='_blank'
        rel="noreferrer"
        className='repo-name'
      >{repo.name}</a>
      {repo.description && <p className='repo-descr'>{repo.description}</p>}
      {repo.language && <p className='repo-lang'>{`Language: ${repo.language}`}</p>}
      <p className='last-update'>{`Last updated: ${day}.${month}.${year}`}</p>
    </div>
  );
}