
console.log("Static version loaded ✨");


const animatedElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));




function loadCreativePrograms_STATIC() {

    const labels = [
        "TOTAL",
        "Designteknolog",
        "Multimediedesigner",
        "PB Design & Business"
    ];

    const women = [567, 158, 115, 111];
    const men = [174, 29, 48, 20];

    const creativeCanvas = document.querySelector("#creativeChart");

    new Chart(creativeCanvas, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Kvinder",
                    data: women,
                    backgroundColor: "rgba(247,165,165,0.9)"
                },
                {
                    label: "Mænd",
                    data: men,
                    backgroundColor: "rgba(26,42,79,0.7)"
                }
            ]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false
        }
    });
}




function loadGenderDistribution_STATIC() {

    const labels = [
        "Datalogiske institutter (LVU)",
        "Ingeniørinstitutter (LVU)",
        "HUM/SAMF IT (LVU)",
        "Professionshøjskoler / KVU",
        "IT-elektronik (KVU)",
        "TOTAL"
    ];

    const men = [81, 85, 69, 45, 95, 69];
    const women = [19, 15, 31, 55, 5, 31];

    const genderCanvas = document.querySelector("#genderChart");

    new Chart(genderCanvas, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Mænd (%)",
                    data: men,
                    backgroundColor: "rgba(110,110,110,0.85)",
                },
                {
                    label: "Kvinder (%)",
                    data: women,
                    backgroundColor: "rgba(247,165,165,0.9)",
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}




function loadDonut_STATIC() {

    const donutCanvas = document.querySelector("#genderDonut");

    const women = 31;
    const men = 69;

    new Chart(donutCanvas, {
        type: "doughnut",
        data: {
            labels: ["Kvinder (%)", "Mænd (%)"],
            datasets: [{
                data: [women, men],
                backgroundColor: [
                    "rgba(247,165,165,0.9)",
                    "rgba(110,110,110,0.85)"
                ],
                borderRadius: 10,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "60%"
        }
    });

    donutCanvas.closest(".fade-in")?.classList.add("visible");
}



loadCreativePrograms_STATIC();
loadGenderDistribution_STATIC();
loadDonut_STATIC();

function scrollToSection(id) {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: "smooth" });
}

