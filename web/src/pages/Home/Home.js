import { useMutation } from '@hammerframework/hammer-web'

export const query = gql`
  query USERS {
    users {
      id
      email
    }
  }
`

export const Loader = () => <div>Loading...</div>

const Home = ({ users }) => {
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
      refetchQueries: () => [{ query }],
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

export default Home
