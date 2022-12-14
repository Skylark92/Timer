const app = document.querySelector(".app");

const 시입력 = app.querySelector("#hrs");
const 분입력 = app.querySelector("#min");
const 초입력 = app.querySelector("#sec");

// 입력값 확인
시입력.addEventListener("change", () => {
  if (+시입력.value > 99 || +시입력.value < 0) {
    시입력.value = "";
    alert("0 이상 99 이하의 숫자를 입력해주세요.");
  }
});

분입력.addEventListener("change", () => {
  if (+분입력.value >= 60 || +분입력.value < 0) {
    분입력.value = "";
    alert("0 이상 60 미만의 숫자를 입력해주세요.");
  }
});

초입력.addEventListener("change", () => {
  if (+초입력.value >= 60 || +초입력.value < 0) {
    초입력.value = "";
    alert("0 이상 60 미만의 숫자를 입력해주세요.");
  }
});

// 버튼 활성화
const 시작버튼 = app.querySelector(".start-btn");
const 초기화버튼 = app.querySelector(".reset-btn");

let 상태 = false;

시작버튼.addEventListener("click", () => {
  시계();
});

function 시계() {
  let 시간 = 시입력.value * 3600 + 분입력.value * 60 + 초입력.value * 1;

  시입력.value = parseInt((시간 - (분입력.value * 60 + 초입력.value * 1)) / 3600);
  분입력.value = parseInt((시간 - (시입력.value * 3600 + 초입력.value * 1)) / 60);
  초입력.value = parseInt(시간 - (시입력.value * 3600 + 분입력.value * 60));

  if (!시간) {
    return console.log("안돼");
  } else {
    console.log("돌고있나", 시간);
    시간--;
  }
  setTimeout(시계, 1000);
}

// ㅠ__ㅠ
