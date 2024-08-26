import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 2rem 0;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .favourites-container {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 1.5rem;
    padding: 0 2rem;
  }

  .no-favourites {
    text-align: center;
    font-size: 1.5rem;
    color: var(--grey-700);
  }

  @media (max-width: 768px) {
    .favourites-container {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`

export default Wrapper
