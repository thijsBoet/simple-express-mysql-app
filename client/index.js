document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost")
    loadHTMLTable([]);
})

const loadHTMLTable = (data) => {
    const table = document.querySelector("table tbody");
    let tableHTML = "";

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}