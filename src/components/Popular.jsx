import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/spide/dist/css/splide.min.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api =
      await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}
			&number=9
		`);
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      <Wrapper>
        <Splide
          options={{
            perPage: 4,
						arrows: false,
						paginaion: false,
						drag: "free",
						gap: "5rem"
          }}
        >
          <h3>Popular</h3>
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
