const marketingShare = [
    { Country: "台灣", Ranking: 1, Company: "台積電", Share: 53.1 },
    { Country: "韓國", Ranking: 2, Company: "三星電子", Share: 17.3 },
    { Country: "台灣", Ranking: 3, Company: "聯電", Share: 7.2 },
    { Country: "美國", Ranking: 4, Company: "格羅方德", Share: 6.1 },
    { Country: "中國", Ranking: 5, Company: "中芯國際", Share: 5.3 },
    { Country: "中國", Ranking: 6, Company: "華虹半導體", Share: 2.6 },
    { Country: "台灣", Ranking: 7, Company: "力積電", Share: 1.8 },
    { Country: "台灣", Ranking: 8, Company: "世界先進", Share: 1.4 },
    { Country: "以色列", Ranking: 9, Company: "高塔半導體", Share: 1.4 },
    { Country: "南韓", Ranking: 10, Company: "東部高科", Share: 1 }
];
const categories = ["排名", "公司", "國別", "市占率%"];

const container = document.querySelector(".container");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const companyInfo = ["Ranking", "Company", "Country", "Share"];
window.onload = function() {
    table.setAttribute("class", "table table-bordered table-striped table-dark mt-5");
    createThead();
    createTbody();
};

function createThead() {
    let tr = document.createElement("tr");
    categories.forEach(category => {
        let th = document.createElement("th");
        th.innerText = category;
        tr.appendChild(th);
    })
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
};

function createTbody() {
    marketingShare.forEach(company => {
        let tr = document.createElement("tr");
        companyInfo.forEach(info => {
            let td = document.createElement("td");
            td.innerText = company[info];
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
    })
    table.appendChild(tbody);
}

let companiesName = [], companiesData = [];
marketingShare.forEach(corp => {
    companiesName.push(corp.Company);
    companiesData.push(`${corp.Share}`);
})
// chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: companiesName,
        datasets: [{
            label: 'Rankings',
            data: companiesData,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255,75,50)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 138, 64)',
                'rgb(142, 65, 64)',
                'rgb(59, 72, 64)'
            ]
        }]
    },
    options: {
        responsive: true,
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '2021年全球晶圓代工市占率％'
            }
        }
    }
});