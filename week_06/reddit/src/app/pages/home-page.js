import { gql, useQuery } from '@apollo/client';

const GET_ALL_COMMUNITIES = gql`
query GetCommunities {
  communities {
    name
    description
    type
    authUsers {
      profile {
        firstName
        lastName
      }
      email
    }
  }
}`;

const HomePage = () => {
  const {loading, error, data } = useQuery(GET_ALL_COMMUNITIES);

  return (
    <>
      <h1>HOME</h1>
      {error && <p>{error.toString()}</p>}
      {data && data.communities && data.communities.map(community => {
        return (
          <li>{community.name}</li>
        )
      })}
    </>
  )
};

export default HomePage;