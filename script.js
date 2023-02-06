@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0A2647;
    height: 100vh;
    width: 100%;
    font-family: 'Montserrat', 'sans-serif';
}

.header {
    border: 3px solid rgba(238, 238, 238, 0.3);
    border-radius: 5px;
    padding: 12px;
    color: #FFF;
    width: 200px;
    position: relative;
    left: 50px;
    top: 120px;
}

.container:fullscreen {
    width: 100%;
    height: 100%;
}

.container:-webkit-full-screen {
    width: 100%;
    height: 100%;
}

.score-container {
    background-color: #FFF;
    width: 200px;
    padding: 12px;
    border-radius: 5px;
    position: relative;
    left: 240px;
    bottom: 15px;
    border-left: 10px solid #6F1AB6;
    border-right: 10px solid #6F1AB6;
    font-size: 25px;
    text-align: center;
}

.score-container div {
    display: inline-block;
}

.scores {
    margin: 10px;
    padding-top: 5px;
    font-size: 15px;
}

.score-container .user span {
    display: flex;
    margin: auto 5px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    align-items: center;
    justify-content: center;
}

.score-container .ai span {
    display: flex;
    margin: auto 5px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;
}

button.chosen {
    font-size: 30px;
    background-color: #FFF;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    padding: 20px;
    cursor: pointer;
    margin: 10px;
}

button.scissors {
    margin-left: 15px;
    text-align: center;
}

button:focus {
    outline: 0;
}

.play {
    transform: scale(1.1);
}

.game-container {
    padding: 20px;
    position: relative;
}

button.ai {
    border: 10px solid #6F1AB6;
    font-size: 30px;
    background-color: #FFF;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    padding: 20px;
    cursor: pointer;
    margin: 0;
}

.game-container .ai {
    display: flex;
    flex-direction: column;
    color: #FFF;
    padding: 20px;
    text-align: center;
    align-items: center;
}

.game-container .ai.play {
    transform: scale(1.2);
}

.game-container .ai span {
    margin-bottom: 10px;
}

.game-container .user {
    padding: 10px;
    border: 2px solid rgba(238, 238, 238, 0.3);
    border-radius: 5px;
}

.paper {
    border: 10px solid #F5EA5A;
}

.rock {
    border: 10px solid #39B5E0;
}

.scissors {
    border: 10px solid #F94A29;
}

.winner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.winner-container button {
    padding: 15px;
    background-color: #FFF;
    font-size: 25px;
    font-weight: 700;
    border-radius: 5px;
    margin: 10px auto;
    border: 0;
    cursor: pointer;
}
