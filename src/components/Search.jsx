import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

function Search() {
  const [input, setInput] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();

		
	}

	return (
    <FormStyle>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;

  position: relative;
  width: 100%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    width: 100%;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
