import { Link, routes } from '@redwoodjs/router'

import Members from 'src/components/Member/Members'

export const QUERY = gql`
  query FindMembers {
    members {
      id
      rank
      last_name
      first_name
      certifications
      status
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No members yet. '}
      <Link to={routes.newMember()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ members }) => {
  return <Members members={members} />
}
