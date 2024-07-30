'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AssessmentPage() {
  const [responses, setResponses] = useState({});
  const [message, setMessage] = useState('');
  const [assessments, setAssessments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
    } else {
      fetchAssessments(token);
    }
  }, [router]);

  const fetchAssessments = async (token) => {
    try {
      const response = await axios.get('https://fnaxiombe.onrender.com/api/assessments', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAssessments(response.data);
    } catch (error) {
      console.error('Failed to fetch assessments', error);
    }
  };

  const handleChange = (e) => {
    setResponses({
      ...responses,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://fnaxiombe.onrender.com/api/assessment',
        { responses },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(response.data.message);
      fetchAssessments(token); // Refresh assessments after submission
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.error || 'Submission failed');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Assessment Page
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="question1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Question 1
              </label>
              <div className="mt-2">
                <input
                  id="question1"
                  name="question1"
                  type="text"
                  required
                  value={responses.question1 || ''}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="question2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Question 2
              </label>
              <div className="mt-2">
                <input
                  id="question2"
                  name="question2"
                  type="text"
                  required
                  value={responses.question2 || ''}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
          )}
          
          <div className="mt-10">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Previous Responses</h3>
            <ul className="mt-4 space-y-4">
              {assessments.map((assessment, index) => (
                <li key={index} className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                  <p className="text-sm font-medium leading-5 text-gray-900">Response {index + 1}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    {Object.entries(assessment.responses).map(([key, value]) => (
                      <p key={key}>
                        <span className="font-medium">{key}:</span> {value}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
