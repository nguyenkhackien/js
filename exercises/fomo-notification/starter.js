function createNotification(title) {
  const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
      </p>
    </div>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", template);
}
const titles = ["huy", "kien", "tuong", "viet", "thanh", "quyen"];
let lastTitle;
let timer = setInterval(() => {
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const noti = document.querySelector(".noti");
  if (noti) noti.parentNode.removeChild(noti);
  if (lastTitle !== randomTitle) {
    createNotification(randomTitle);
  }
  lastTitle=randomTitle;
}, 4000);
