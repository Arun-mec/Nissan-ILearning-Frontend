"use strict";
const element = document.getElementById("sample");
element === null || element === void 0 ? void 0 : element.addEventListener("click", listenerFunction);
function listenerFunction() {
    console.log("button clicked");
    const bgColor = this.style.background;
    if (bgColor == "blue") {
        this.style.background = "red";
    }
    else {
        this.style.background = "blue";
    }
}
