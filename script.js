// MAIN NUM ANIMATION
const mainScore = document.querySelector('#main-score');


// LIST ANIMATION
const summaryList = document.querySelector(".summary-list");

function animateScore(element, target) {
  let current = 0;

  const interval = setInterval(() => {

    current++;

    element.textContent = current;

    if (current >= target) {
      clearInterval(interval);
    }

  }, 20);
}

animateScore(mainScore, 76)


//  FETCHING DATA
fetch("./data.json")
  .then(response => response.json())
  .then(data => {

    data.forEach(item => {
      const li = document.createElement("li");

      li.classList.add(item.category.toLowerCase());

      li.innerHTML = `
        <div>
          <img src="${item.icon}" alt="">
          <span>${item.category}</span>
        </div>

        <div>
          <strong class="animated-score">0</strong>
          <span class="hundred">/ 100</span>
        </div>
      `;

      summaryList.appendChild(li);

      const scoreElement = li.querySelector(".animated-score");

      animateScore(scoreElement, item.score);
    });

  });