import { useQuery, gql } from '@apollo/client';

const GET_SCORES = gql`
  query {
    scores {
      id
      score
      date
    }
  }
`;

export default function ScoreRevolver() {
  const { loading, error, data } = useQuery(GET_SCORES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <ul>
      {data.getScores.map(score => (
        <li key={score.id}>
          {score.date}: {score.score}
        </li>
      ))}
    </ul>
  );
}
