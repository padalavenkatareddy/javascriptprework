let queen = {
  direction: "S",
  position: [x=4,y= 0],
  whereabouts: []
};

      function getQueenDirection() {
        console.log(queen);
      }
      function changeDirection(direction) {
        switch (direction) {
          case "N":
            queen.direction = "N";
            break;
          case "S":
            queen.direction = "S";
            break;
          case "E":
            queen.direction = "E";
            break;
          case "W":
            queen.direction = "W";
            break;
          case "NE":
            queen.direction = "NE";
            break;
          case "NW":
            queen.direction = "NW";
            break;
          case "SE":
            queen.direction = "SE";
            break;
          case "SW":
            queen.direction = "SW";
            break;
        }
      }
      function moveForward() {
        switch (queen.direction) {
          case "N":
            queen.position[1] -= 1;
            break;
          case "S":
            queen.position[1] += 1;
            break;
          case "E":
            queen.position[0] += 1;
            break;
          case "W":
            queen.position[0] -= 1;
            break;
          case "NE":
            queen.position[0] += 1;
            queen.position[1] -= 1;
            break;
          case "NW":
            queen.position[0] -= 1;
            queen.position[1] -= 1;
            break;
          case "SE":
            queen.position[0] += 1;
            queen.position[1] += 1;
            break;
          case "SW":
            queen.position[0] -= 1;
            queen.position[1] += 1;
            break;
        }
      }
      function jumpMoveForward(steps) {
        while (steps > 0) {
          switch (queen.direction) {
            case "N":
              queen.position[1] -= 1;
              break;
            case "S":
              queen.position[1] += 1;
              break;
            case "E":
              queen.position[0] += 1;
              break;
            case "W":
              queen.position[0] -= 1;
              break;
            case "NE":
              queen.position[0] += 1;
              queen.position[1] -= 1;
              break;
            case "NW":
              queen.position[0] -= 1;
              queen.position[1] -= 1;
              break;
            case "SE":
              queen.position[0] += 1;
              queen.position[1] += 1;
              break;
            case "SW":
              queen.position[0] -= 1;
              queen.position[1] += 1;
              break;
          }
          steps -= 1;
        }
      }
      function updatePosition() {
        let lengths = queen.position.map((item) => item);
        queen.whereabouts.push(lengths);
      }