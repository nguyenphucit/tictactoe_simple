# **Tic-Tac-Toe Game** 🎮

A customizable Tic-Tac-Toe game built with **React** and **TypeScript**, now available as a **pre-built Docker image** for easy deployment. You can also try the live demo here: [Tic-Tac-Toe Live Demo](https://tictactoe-simple-git-main-nguyen-phucs-projects-66da98d1.vercel.app/)

## **Prerequisites**

Before getting started, ensure you have either **Docker** or **Node.js & npm** installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## **Project Structure**

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

## **Features**

- 🛠 **Pre-built Docker image** – No setup required
- 📏 **Customizable board size** – Supports 3x3 and larger grids
- 🏆 **Adjustable winning conditions**
- 📊 **Game history tracking**
- 🌍 **Responsive UI** – Optimized for all screen sizes

## **Running from Source**

If you prefer to build and run the application manually, follow these steps:

### **1. Clone the Repository**

```sh
git clone https://github.com/nguyenphucit/tictactoe_simple.git
cd tictactoe_simple
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Start the Application**

```sh
npm start
```

This will open **http://localhost:3000** in your browser.

---

## **Getting Started with Docker (Optional)**

### **1. Pull the Docker Image**

```sh
docker pull nguyenphuc142002/tic-tac-toe-app:latest
```

### **2. Run the Container**

```sh
docker run -p 3000:80 nguyenphuc142002/tic-tac-toe-app
```

Now, open **http://localhost:3000** in your browser to start playing!

### **3. Run in Detached Mode (Optional)**

If you want to run the container in the background:

```sh
docker run -d -p 3000:80 nguyenphuc142002/tic-tac-toe-app
```

To stop the container, first find its container ID:

```sh
docker ps
```

Then stop it using:

```sh
docker stop <container_id>
```

---

## **Contributing** 🤝

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## **License** 📝

This project is licensed under the **MIT License**.

---

Happy coding! 🚀
