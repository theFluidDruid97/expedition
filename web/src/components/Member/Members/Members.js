import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Member/MembersCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMemberMutation($id: Int!) {
    deleteMember(id: $id) {
      id
    }
  }
`

const MembersList = ({ members }) => {
  const [deleteMember] = useMutation(DELETE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete member ' + id + '?')) {
      deleteMember({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Last name</th>
            <th>First name</th>
            <th>Certifications</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{truncate(member.rank)}</td>
              <td>{truncate(member.last_name)}</td>
              <td>{truncate(member.first_name)}</td>
              <td>{truncate(member.certifications)}</td>
              <td>{truncate(member.status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.member({ id: member.id })}
                    title={'Show member ' + member.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMember({ id: member.id })}
                    title={'Edit member ' + member.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete member ' + member.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(member.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MembersList
