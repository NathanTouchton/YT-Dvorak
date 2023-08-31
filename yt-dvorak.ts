/// <reference path="./firefox.d.ts" />

function convert(): void {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "h") {
            event.preventDefault()
            const newEvent: Event = new KeyboardEvent("keydown", {key: "j"})
            document.dispatchEvent(newEvent)
        }
    })
}