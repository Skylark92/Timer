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
    console.log("되나");
    초입력.value++;
    시계();
});

function 시계() {
    let 시 = 시입력.value;
    let 분 = 분입력.value;
    let 초 = 초입력.value;

    if (!시 && !분 && !초) {
        return console.log("안돼");
    } else {
        초입력.value -= 1;
    }
    setTimeout(시계, 1000);
}
