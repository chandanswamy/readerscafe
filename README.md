# Reader's Cafe Project

Welcome to Reader's Cafe, a web application designed for users to explore and manage their book collections using the Google Books API. This project is structured with both frontend and server-side components, utilizing React.js for the frontend, Node.js and Express for the server, and SQLite as the database.

## Features

- **Responsive Web Designing:** The application is designed to provide a seamless experience across different devices and screen sizes, ensuring optimal usability for all users.

- **Navbar:** The navigation bar allows users to easily navigate to different routes within the application, making it simple to browse and find their desired content.

- **Pagination:** The application incorporates pagination to efficiently display a large amount of content. It allows users to navigate through multiple pages of restaurant listings, making it easier to find and explore different options.

- **Search Functionality**: Leveraging the Google Books API, users can search for a wide variety of books. The application allows users to add their favorite books to their collection.

- **Authentication and Authorization:** Reader's Cafe includes authentication and authorization features to ensure secure usage of the application. Users can log in, and perform actions based on their assigned roles.
  ```bash
  Email: rahul@123.com
  Password: rahul@2021
  ```

## Technologies Used

The following technologies were used in the development of Readers Cafe:

- **React JS:** The project is built using the React JS library, which provides a fast and efficient way to create interactive user interfaces.

- **HTML:** HTML is used for structuring the content and elements of the application.

- **CSS:** CSS is utilized for styling the user interface, providing visually appealing layouts and designs.

- **JavaScript:** JavaScript is used for adding interactivity and functionality to the application.

- **Node.js:** Node.js is a JavaScript runtime used for building server-side applications. It may be used in this project for backend functionality or API integrations.

- **Express:** Express is a web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a set of features for web and mobile applications.

- **SQLite:** SQLite is a lightweight, serverless, and self-contained relational database management system. It's often used in web development for its simplicity and ease of integration.


## Project Structure

### Frontend

#### Third-Party Packages Used

Readers Cafe incorporates the following third-party packages to enhance its functionality:

- **React-Icons:** This package provides a wide range of icons that can be easily used within the React components, improving the visual representation of various elements.

- **React Loader Spinner:** This package provides loading spinners that can be used to indicate background processes or content loading, enhancing the user experience.

- **Cookies:** The Cookies package is used for handling cookies in the application. It provides functionality for setting, getting, and managing cookies, which can be useful for authentication and other purposes.

### Server Side

The server side is developed using Node.js and Express, providing a robust backend for the application.

#### Routes

Express is utilized to define and handle routes for various endpoints in the application. These routes facilitate communication between the frontend and backend, allowing for functionalities such as user authentication, book retrieval, and database interactions.

#### CORS (Cross-Origin Resource Sharing)

To handle cross-origin requests and ensure secure communication between the frontend and backend, the server employs CORS. This is crucial for allowing the web application hosted on one domain to make requests to the backend server hosted on another domain.

#### bcrypt

For secure password handling, the server utilizes bcrypt, a cryptographic hash function. This ensures that user passwords are securely hashed before being stored in the database, enhancing the overall security of user accounts.

#### JWT Token (JSON Web Token)

JSON Web Tokens are employed for user authentication and authorization. When a user successfully logs in, the server generates a JWT token that contains relevant user information and is sent to the client. This token is then included in subsequent requests to authenticate and authorize the user, providing a stateless and secure method of user sessions.

#### Additional Server Components

- **Middleware:** Various middleware functions may be implemented for tasks such as logging, error handling, and request validation. Middleware enhances the functionality and security of the server.

- **Database Integration:** The server communicates with the SQLite database to store and retrieve user information, book data, and other relevant details.

- **Third-Party Packages:** Additional npm packages, such as body-parser, morgan, or helmet, may be integrated to enhance server functionality, improve logging, or add security features.

#### Database

The project uses SQLite as the database, ensuring data persistence and easy integration with the chosen tech stack.

## Installation

To run Readers Cafe locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/chandanswamy/readerscafe.git
   ```

2. Navigate to the frontend and server-side folders and install dependencies.
  ```bash
   cd readers-cafe/frontend
   npm install
  
   cd ../server
   npm install
  ```

3. Start the development server:
   
  ####Start the frontend
  ```bash
  cd ../frontend
  npm start
  ```
  
  ####Start the server
  ```bash
  cd ../server
  npm run dev
  ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

I would like to thank the following resources for their valuable contributions to this project:

- [js-cookie Documentation](https://www.npmjs.com/package/js-cookie)
- [react-icons Documentation](https://react-icons.github.io/react-icons/)
- [react-loader-spinner Documentation](https://www.npmjs.com/package/react-loader-spinner)
- [Create React App Documentation](https://create-react-app.dev/)

Feel free to refer to their documentation for more details on how to use their respective packages.

## Contact

For any inquiries or further information, please contact us at [email](chandanswamy13214@gmail.com)
