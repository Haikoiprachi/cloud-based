<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Flipper</title>
    <style>
        #green {
            background-color: green;
        }
        #blue {
            background-color: blue;
        }
        #red {
            background-color: red;
        }
        button {
            border-radius: 5px;
            width: 100px;
            height: 40px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h3>Color Flipper</h3>
    <button id="green" onclick="setColor('green')">Green</button>
    <button id="red" onclick="setColor('red')">Red</button>
    <button id="blue" onclick="setColor('blue')">Blue</button>
    <button onclick="randomColor()">Random</button>
    <script src="index.js"></script>
</body>
</html>
