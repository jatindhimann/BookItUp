import styled from 'styled-components'

const Wrapper = styled.article`
  ${'' /* background: var(--white); */}
  box-shadow: var(--shadow-2);
  border-radius: var(--borderRadius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  position: relative;
  height: 100%; /* Ensures the card takes up available height */
  border: 1px solid var(--grey-200); /* Adds a subtle border for a more defined look */

  :hover {
    box-shadow: var(--shadow-3);
    transform: translateY(-5px);
  }

  .img-container {
    position: relative;
    height: 15rem;

    .img {
      width: 100%;
      height: 100%;
      object-fit: contain; 
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .btn-fav {
      position: absolute;
      top: 10px;
      right: 10px;
      color: var(--primary-300);
      font-size: 1.5rem;
      cursor: pointer;
      background: none; 
      border: none;
      outline: none;
      transition: background 0.3s ease, transform 0.3s ease;

      :hover {
        transform: scale(1.2);
      }

      svg {
        margin: 0;
        padding: 0;
        transition: color 0.3s ease;
      }

      :hover svg {
        color: var(--primary-500);
      }
    }
  }

  .footer {
    flex: 1; /* This makes sure the footer takes up the remaining space */
    padding: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures spacing between elements */

    h4 {
      font-size: 1.25rem;
      font-weight: 700; /* Slightly bolder font for a more impactful look */
      color: var(--textColor);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.875rem;
      margin-bottom: 1rem;
      color: var(--grey-600);
    }

    .btn-container {
      margin-top: auto; /* Pushes the button to the bottom */
    }

    .btn {
      cursor: pointer;
      color: var(--white);
      background: var(--primary-500);
      border: none;
      border-radius: 30px; /* Subtle rounded corners for a modern feel */
      letter-spacing: 0.5px;
      padding: 0.5rem 1.5rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      text-transform: capitalize;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-weight: 600; /* Bold text for buttons */

      :hover {
        background: var(--primary-600);
        box-shadow: var(--shadow-2);
      }
    }
  }
`

export default Wrapper
