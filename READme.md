# E-Commerce Backend

This is the backend application for an E-Commerce site. It provides API endpoints to manage categories, products, and tags. The application is built using Node.js, Express.js, and Sequelize ORM for interacting with the MySQL database.

## Installation

1. Clone the repository: `git clone https://github.com/AzizAden/E-Commerce-Backend.git`
2. Navigate to the project directory: `cd E-Commerce-Backend`
3. Install the dependencies: `npm install`

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Set the following environment variables in the `.env` file:

   ```plaintext
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   
Replace `your_database_name`, `your_database_user`, `your_database_password`, `your_database_host`, and `your_database_port` with your actual database information.

## Database Setup

1. Ensure that MySQL server is running on your machine.
2. Create a database in MySQL with the name specified in the `DB_NAME` environment variable.

## Usage

1. Start the application: `npm start`
2. The backend server will be running at `http://localhost:3001`.

## API Endpoints

- `/api/categories`: API endpoints for managing categories.
- `/api/products`: API endpoints for managing products.
- `/api/tags`: API endpoints for managing tags.

Refer to the API documentation for detailed information about each endpoint and their request/response formats.

## Walkthrough Video

[Add the link to your walkthrough video here]

## Issues

If you encounter any issues or have any questions, please [open an issue](https://github.com/AzizAden/E-Commerce-Backend/issues) on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)


Feel free to copy the above code and use it as your README template.

