import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--grey-100);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);

  .book-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: start;
  }

  .book-image {
    max-width: 250px;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    margin-bottom: 1rem;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--primary-600);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 0.9rem;
    color: var(--grey-600);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--grey-700);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .btn-more {
    background-color: var(--primary-500);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: var(--borderRadius);
    text-transform: uppercase;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    display: block;
    text-align: center;
  }

  .btn-more:hover {
    background-color: var(--primary-700);
  }

  @media (max-width: 768px) {
    .book-container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .book-image {
      margin: 0 auto 1.5rem;
    }

    .book-info {
      align-items: center;
    }
  }
`

export default Wrapper
