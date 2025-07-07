import React from "react";
import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';

const ADD_SCORE = gql`
  mutation AddScore($score: Int!, $date: String!) {
    addScore(score: $score, date: $date) {
      id
      score
      date
    } 
  }
`;

const DELETE_SCORE = gql`
  mutation DeleteScore($id: ID!) {
    deleteScore(id: $id) {
      id
    }
  }
`;

const GET_SCORES = gql`
  query GetScores {
    scores {
      id
      score
      date
    }
  }
`;

export default function Tests() {
  const [formData, setFormData] = useState({ score: '', date: '' });
  const [addScore] = useMutation(ADD_SCORE, {
    update(cache, {data: { addScore }} ) {
      const existingScores = cache.readQuery({ query: GET_SCORES });
      cache.writeQuery({
        query: GET_SCORES,
        data: {
          scores: [addScore, ...existingScores.scores],
        },
      });
    }
  }
  );
  const { data, loading, error } = useQuery(GET_SCORES);

  const [deleteScore] = useMutation(DELETE_SCORE, {
    update(cache, { data: { deleteScore } }) {
      const existingScores = cache.readQuery({ query: GET_SCORES });
      const newScores = existingScores.scores.filter(
        (score) => score.id !== deleteScore.id
      )
      cache.writeQuery({
        query: GET_SCORES,
        data: { scores: newScores },
      })
    }
    //refetchQueries: ["GetScores"], // Optional: ensures UI updates but with 2 network calls, more traffic
  });


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { score, date } = formData;
    try {
      await addScore({
        variables: {
          score: parseInt(score),
          date,
        },
      });
      alert('Score added!');
      setFormData({ score: '', date: '' });
    } catch (err) {
      console.error('Error adding score:', err);
    }
  };
  

  return (
  <>
    <div className="bg-white p-6 rounded-2xl shadow mb-8">
      <h2 className="text-2xl font-semibold mb-4">📅 Test History</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading scores</p>}
      <ul className="divide-y divide-gray-200">
        {data?.scores.map((score) => (
          <li key={score.id} className="py-2 flex justify-between items-center">
            <span>
              Test {score.id} - {score.score}
            </span>
            <button
              onClick={() => deleteScore({ variables: { id: score.id } })}
              className="text-red-500 hover:underline text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>


    <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6">➕ Add New Score</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Score
              </label>
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleChange}

                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
  </>
);
}
