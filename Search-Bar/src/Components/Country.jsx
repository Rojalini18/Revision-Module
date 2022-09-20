import React from "react";
import { useState } from "react";
import { UseFetch } from "../Hooks/UseFetch";
import styled from "styled-components";

const URL = "http://localhost:8080/posts";

export const Country = () => {
  const [text, setText] = useState("");

  const { data, err, loading } = UseFetch(URL, {
    q: text,
  });

  console.log(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log(data);

  return (
    <>
      <input type="text" onChange={handleChange} />
      <Debouncer>
        {loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : err ? (
          <div>Something went wrong</div>
        ) : (
          data.map((el) => {
            return (
              <div>
                <Header>{el.country}</Header>
              </div>
            );
          })
        )}
      </Debouncer>
    </>
  );
};

const Debouncer = styled.div`
  height: 220px;
  width: 400px;
  overflow: auto;
  margin: auto;
`;
const Header = styled.h3`
  &:hover {
    background-color: rgb(207, 200, 200);
  }
`;
