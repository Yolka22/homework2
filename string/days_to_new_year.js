function daysUntilNewYear() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let newYear = new Date(currentYear + 1, 0, 1);
    let timeDiff = newYear.getTime() - today.getTime();
    let days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return days;
  }

  
  
let days = daysUntilNewYear();
console.log(days);