'use client';
import React, { useEffect, useState } from 'react';
import BookPreview from '@/components/BookPreview';

function Index() {
  // const [message, setMessage] = useState("Loading");
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/")
  //     .then(response => response.json())
  //     .then(data => {
  //       setMessage(data.message);
  //       setPeople(data.people);
  //     })
  //     .catch(error => {
  //       setMessage("Error loading data");
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <>
    <BookPreview />
    <BookPreview />
    <BookPreview />
    <BookPreview />

      {/* <div>{message}</div>
      {people.map((name, index) => (
        <div key={index}>
          {name}
      </div>
      ))} */}
    </>
  );
}

export default Index;