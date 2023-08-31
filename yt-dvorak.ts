function convert() {
    addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.code == "H") {
            const newEvent: Event = new KeyboardEvent("keydown", {code: "J"})
            document.dispatchEvent(newEvent)
        }
    })
}