/// <reference path="./firefox.d.ts" />
function convert() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "h") {
            event.preventDefault();
            var newEvent = new KeyboardEvent("keydown", { key: "j" });
            document.dispatchEvent(newEvent);
        }
    });
}
