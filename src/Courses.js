/** @format */

import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Courses() {
  const [courses, setcourses] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getAccessToken() {
      const accessToken = await getAccessTokenSilently();

      await fetch('/courses', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Network response was not ok.');
        })
        .then((response) => setcourses(response.courses))
        .catch((error) => setcourses(error.message));

      await fetch('/admin', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Network response was not ok.');
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    getAccessToken();
  }, [getAccessTokenSilently]);

  return (
    <ul>
      {courses.map((course) => {
        return <li key='course.id'>{course.title}</li>;
      })}
    </ul>
  );
}
