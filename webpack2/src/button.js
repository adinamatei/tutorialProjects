//jshint esversion:6

const Button = {
  button: '<button id="myBtn">Press me</button>',
  attachEl: () => {
    document.getElementById('myBtn').addEventListener('click', () => {
      console.log("It's working!");
    });
  }
};

export default Button;