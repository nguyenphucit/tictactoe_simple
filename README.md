# Tic-Tac-Toe Game

A customizable Tic-Tac-Toe game built with React and TypeScript.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Project Structure

The project follows the structure below:

```
src/
  ├── assets/         # Contains X_icon and O_icon images
  ├── components/     # React components
  │   ├── GameBoard/  # Main game board logic
  │   ├── GameConfig/ # Game settings and customization
  │   ├── GameHistory/# Tracks past games
  │   └── GameStatus/ # Displays current game status
  ├── types/         # Type definitions
  ├── utils/         # Utility functions
  └── App.tsx       # Root component
```

## Features

- Customizable board size (supports 3x3 and larger grids)
- Adjustable winning conditions
- Tracks win/loss/draw history within a session
- User-friendly interface
- Responsive design for various screen sizes

## Getting Started

To set up and run the project, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/nguyenphucit/tictactoe_simple.git
cd tictactoe_simple
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Application

Run the app in development mode:

```sh
npm start
```

This will open `http://localhost:3000` in your browser.
The page will reload automatically when you make changes to the source code.

## Contributing

Contributions are welcome! Feel free to submit issues or create pull requests to improve the project.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎮
