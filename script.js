const form = document.getElementById("route-form");
const result = document.getElementById("route-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const from = document
        .getElementById("from")
        .value.trim();

    const to = document
        .getElementById("to")
        .value.trim();

    if (!from || !to) {
        return;
    }

    result.hidden = false;

    if (from.toLowerCase() === to.toLowerCase()) {
        result.textContent =
            "Please enter two different locations.";
        return;
    }

    result.textContent =
        `Demo journey: ${from} → ${to}. ` +
        "Verified bus-route data has not been added yet.";
});
