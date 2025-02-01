# To-Do App

A simple and interactive To-Do List web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to create, update, delete, and manage their tasks effectively. It offers a user-friendly interface and a smooth experience for managing daily tasks.

## Features

- **Add Tasks**: Create new tasks with specific titles and descriptions.
- **Mark Tasks as Completed**: Easily mark tasks as completed once you're done with them.
- **Delete Tasks**: Remove tasks you no longer need or completed.
- **Edit Tasks**: Update task details, including titles and descriptions.
- **Task Filtering**: Filter tasks to show only completed, incomplete, or all tasks.
- **Responsive Design**: The app is fully responsive, making it usable on both mobile and desktop screens.
- **Persistent Storage**: All data is stored in MongoDB, so your tasks remain even after you refresh the page.

## Technologies Used

- **Frontend**: React.js, JavaScript (ES6+), HTML, CSS (Styled Components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **State Management**: React Context API
- **Libraries**: Axios for API requests, Moment.js for task time management
- **Deployment**: Heroku (for both frontend and backend)

## Installation

### Prerequisites

Before starting, make sure you have the following installed on your local machine:

- **Node.js** and **npm** (or **Yarn**)
- **MongoDB** (local or MongoDB Atlas account)
- A **code editor** (like VS Code)

### Clone the repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### Set up the Backend

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file and add your MongoDB URI and JWT secret key:

```plaintext
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
```

4. Run the server:

```bash
npm start
```

The backend server will run on `http://localhost:5000`.

### Set up the Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Run the React development server:

```bash
npm start
```

The app will now be available at `http://localhost:3000`.

### Testing the App

Once both the frontend and backend servers are running, open your browser and navigate to `http://localhost:3000`. You can start adding tasks, editing, and deleting them, and the changes will persist in MongoDB.

## API Endpoints

### `POST /api/tasks`
- **Description**: Add a new task to the list.
- **Request Body**: 
```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

### `GET /api/tasks`
- **Description**: Retrieve all tasks from the database.
- **Response**: An array of tasks.
```json
[
  {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
  }
]
```

### `PUT /api/tasks/:id`
- **Description**: Update an existing task by ID.
- **Request Body**:
```json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true
}
```

### `DELETE /api/tasks/:id`
- **Description**: Delete a task by ID.

## Screenshots

### Desktop View

![Desktop View](images/desktop_view.png)

### Mobile View

![Mobile View](images/mobile_view.png)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

### Steps to contribute:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Open a pull request and describe your changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [React](https://reactjs.org/) and [Node.js](https://nodejs.org/en/) for providing an excellent development environment.
- Special thanks to [MongoDB](https://www.mongodb.com/) for their flexible and scalable database solution.
- Shoutout to the open-source community for contributing to the libraries and tools used in this app.

## Author

Monil Raju Chauhan  
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourprofile)  
