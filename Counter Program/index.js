// Counter Program

const decreasedBtn = document.getElementById("decreasedBtn");
const resetBtn = document.getElementById("resetBtn");
const increasedBtn = document.getElementById("increasedBtn");
const countLabel = document.getElementById("countLabel")
let count = 0;

// increase the count
increasedBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}
// decrease the count
decreasedBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}
// reset the count
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}