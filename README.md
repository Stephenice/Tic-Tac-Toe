# Tic-Tac-Toe Game

This project implements a complete basic game of Tic-Tac-Toe using React and TypeScript. The game allows two players to play on the same application by alternating turns. Additionally, the game board size can be adjusted to any size between 3 and 15.

## Features

1. Basic Tic-Tac-Toe Game

   - Implemented using React and TypeScript.
   - Supports alternating turns between two players.
   - Allows starting a new game after one is completed and provide information about score.

2. Scalable Board

   - Provides input to change the board size.
   - Board size can be adjusted between 3 and 15.

3. Board Color
   - Provides input to change the board color.

## Installation

1. Make sure you have **node** installed

2. Clone the repository:

```bash
git clone https://github.com/Stephenice/Tic-Tac-Toe.git
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

## Future Work - Problem 3

- Improve styling and responsive design

We want to store game results in a database.

- create a simple backend server (using a simple generator provided by your IDE is fine)
- use any SQL/noSQL database to store the results
- return simple stats back to the front-end: number of win/losses for each player.

Simplification for the task:

- do not use database migration tools, just an SQL or other script to create tables is fine
- add comments about what you were thinking about but didn’t implement because of restrictions
- host the project on your local machine, optional hosting in a public place is fine
- optionally create a Dockerfile to build both back-end and front-end. Do not create any deployment scripts, if it's not necessary.
- optional tests are welcome
