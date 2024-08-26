import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .back-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .btn-back {
    background-color: #007bff;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .btn-back:hover {
    background-color: #0056b3;
  }

  .book-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: flex-start;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding: 1rem;
  }

  .book-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .button-group {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .btn-more,
  .btn-favourites {
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .btn-more {
    background-color: #0056b3;
  }

  .btn-more:hover {
    background-color: #004494;
  }

  .btn-favourites.add {
    background-color: #28a745;
  }

  .btn-favourites.add:hover {
    background-color: #218838;
  }

  .btn-favourites.remove {
    background-color: #dc3545;
  }

  .btn-favourites.remove:hover {
    background-color: #c82333;
  }

  @media (max-width: 768px) {
    .book-container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .image-container {
      padding: 0;
    }

    .book-image {
      margin: 0 auto 1.5rem;
      max-width: 100%;
    }

    .book-info {
      align-items: center;
    }

    .button-group {
      flex-direction: column;
      align-items: center;
    }
  }
`

export default Wrapper
