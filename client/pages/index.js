import React, { useEffect, useState } from 'react'

function index() {

  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/").then(
      response => response.json()
    ).then(
      data => {
        // console.log(data.people);
        setMessage(data.message)
        setPeople(data.people)
      }
    )
  }, [])


  return (
    <>
      <div>{message}</div>
      {
        people.map((name, index) => (
          <div key={index}>
            {name}
          </div>
          )
        )
      }
    </>
  )
}

export default index
