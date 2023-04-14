document.addEventListener("DOMContentLoaded", function() {
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const cells = document.querySelectorAll(".cell");
  
    start.addEventListener("mouseover", function() {
      this.style.backgroundColor = "purple";
    });
  
    end.addEventListener("mouseover", function() {
      alert("Congratulations! You won the game!");
    });
  
    cells.forEach(cell => {
      cell.addEventListener("mouseover", function() {
        this.style.backgroundColor = "grey";
      });
  
      cell.addEventListener("mouseout", function() {
        this.style.backgroundColor = "black";
      });
    });
  });
  