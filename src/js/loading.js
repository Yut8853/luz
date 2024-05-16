const svgElement = document.querySelector(".preloader-logo");
const loadingElement = document.querySelector(".loading");

// アニメーションが終わったらフェードアウトを開始する
svgElement.addEventListener("animationend", () => {
  loadingElement.style.animation = "fadeOut 2s ease-in-out forwards";
});

// フェードアウトが終わったら次のステップに進む
loadingElement.addEventListener("animationend", () => {
  loadingElement.style.display = "none";
});

// 初期ロードでアニメーションを開始する
window.addEventListener("load", () => {
  svgElement.style.animation =
    "plane-loading-animation 3s ease-in-out forwards";
});
