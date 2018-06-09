import React, {Component} from 'react';

class Exercise3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateArray() {
    return [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18]
    ];
  }

  transpose(matrix) {
    if (matrix.length > 0) {
      return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c])).reverse();
    }
  }
  
  generateWalk(array) {
    let matrix = array;
    let answer = [];
    
    const loops = matrix.length * 2 - 1;
    for (let i = 0; i < loops; i += 1) {
      if (matrix) {
        let row = matrix.shift();
        answer.push(row);
        matrix = this.transpose(matrix);
      }
    }

    return answer.reduce(function (a, b) {
      return a.concat(b);
    }).join('-');
  }
  
  render() {
    return (
      <div className="container">
        Exercise3 page
      </div>
    );
  }
}

export default Exercise3;
