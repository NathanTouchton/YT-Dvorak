function convert() {
    addEventListener("keydown", function (event) {
        if (event.code == "H") {
            var newEvent = new KeyboardEvent("keydown", { code: "J" });
            document.dispatchEvent(newEvent);
        }
    });
}
convert();
