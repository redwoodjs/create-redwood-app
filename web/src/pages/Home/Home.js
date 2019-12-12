import { useMutation } from '@hammerframework/web'

export const QUERY = gql`
  query USERS {
    users {
      id
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ users }) => {
  const [addUser] = useMutation(
    gql`
      mutation CREATE_USER($email: String!) {
        createUser(email: $email) {
          id
          email
        }
      }
    `,
    {
      refetchQueries: () => [{ query: QUERY }],
    }
  )

  return (
    <>
      <h1>Users</h1>
      <ol>
        {users.map(({ email }) => {
          return <li key={'users' + email}>{email}</li>
        })}
      </ol>
      <button
        onClick={() => {
          const localPart = Math.random()
            .toString(36)
            .substr(2, 5)
          addUser({ variables: { email: `${localPart}@example.org` } })
        }}
      >
        Add user
      </button>
    </>
  )
}
