# BookItUp

BookItUp is a sleek and user-friendly single-page application designed to help users discover books quickly and efficiently. By leveraging the power of the Google Books API, BookItUp allows users to search for books in real-time and view detailed information about each book.

## Features

- **Real-Time Book Search**: As users type in the search bar, BookItUp queries the Google Books API and provides instant search results, making it easy to find books without refreshing the page.
- **Detailed Book Information**: Clicking on a book from the search results will take users to a detailed view with extensive information about the book, including its title, author, publisher, publication date, description, and price (if available).
- **Favourites Management**: Users can add books to their favourites for quick access later. The app provides a dedicated Favourites page where users can view and manage their favourite books.
- **Notifications**: React Toastify is used to display real-time notifications, such as when a book is added to or removed from favourites, enhancing the user experience.
- **Responsive Design**: BookItUp works seamlessly on desktops, tablets, and mobile phones, ensuring a consistent and enjoyable experience across all devices.
- **Seamless Navigation**: Utilizes React Router for smooth client-side navigation between pages like home, book details, favourites, and about pages.

## Technology Stack

- **React.js**: Core library for building the user interface, enabling efficient rendering and interactive components.
- **React Router**: Handles client-side routing for smooth transitions between different views of the application.
- **Styled Components**: Implements CSS-in-JS styling for modular and reusable styles scoped to individual components.
- **Axios**: Promise-based HTTP client for making requests to the Google Books API to retrieve book data.
- **React Query**: Manages server-state and data-fetching with caching, synchronization, and more to enhance performance and user experience.

## How It Works

1. **Initial Load**: The `HomeLayout` component sets up the primary layout, including the navigation bar and a content section.
2. **Landing Page**: Users can perform a real-time search for books using the `SearchForm` component. The `Landing` component fetches book data based on the search term and displays the results with the `BookList` component.
3. **Book Details**: Clicking on a book from the list navigates to the `Book` component, where detailed information about the book is displayed. Users can add or remove the book from their favourites using the `BookCard` component. Notifications are shown to provide immediate feedback.
4. **Favourites Page**: The `Favourites` component displays a list of books marked as favourites, allowing users to quickly access their saved books.
5. **Error Handling**: The app includes error handling for page navigation and data fetching errors to ensure a smooth user experience.

## Additional Information

- **Custom Hooks and Context**: Uses custom hooks and context to manage state and interactions, such as adding/removing books from favourites.
- **Loading State**: Displays a loading spinner while data is being fetched to provide visual feedback.
- **Toasts**: Notifications are shown using React Toastify when interacting with favourites for immediate feedback.
- **Accessibility**: Includes ARIA labels for interactive elements to improve usability for all users.
