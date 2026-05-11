// Toggle checked state on a list item
function toggle(item) {
  item.classList.toggle("checked");
  updateProgress();
}

// Count checked items and update the progress bar
function updateProgress() {
  const allItems = document.querySelectorAll("li");
  const checkedItems = document.querySelectorAll("li.checked");

  const total = allItems.length;
  const done = checkedItems.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressLabel").textContent =
    done + " of " + total + " completed";
}

// Run on page load to set initial count
updateProgress();
