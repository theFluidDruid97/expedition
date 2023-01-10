import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMemberMutation($id: Int!) {
    deleteMember(id: $id) {
      id
    }
  }
`

const Member = ({ member }) => {
  const [deleteMember] = useMutation(DELETE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member deleted')
      navigate(routes.members())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete member ' + id + '?')) {
      deleteMember({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Member {member.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{member.id}</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>{member.rank}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{member.last_name}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{member.first_name}</td>
            </tr>
            <tr>
              <th>Certifications</th>
              <td>{member.certifications}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{member.status}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(member.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMember({ id: member.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(member.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Member
