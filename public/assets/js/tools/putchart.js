const uuid = document.getElementById("uuid").value;


async function getData() {
  try {
        let d = await fetch("/tools-url/wol-data?uuid=" + uuid)
        let dj = await d.json();
        return dj;
      } catch (error) {
        console.log(error);
      }
} 
async function _fetchData(){
  const d = await getData();
  return d;
}

const ranksDiv = document.getElementById('ranks');

const showRank = async() => {
  const d = await _fetchData();
  console.log(d.user.wheelOfLifeRates);
  labels=[
    "Health",
    "Friends & Family",
    "Fun, Leisure & Recreation",
    "Wealth",
    "Relationship",
    "Learning & Personal Growth",
    "Possession",
    "Career ",
    "Contribution",
    "Spirituality"
  ]
  d.user.wheelOfLifeRates[0].slice(0,10).forEach((el,i) => {
  const ranksEl = document.createElement('div');
    ranksEl.innerHTML = `<div class="d-flex justify-content-between mb-3">
            <h3 class="fw-bold fs-3" >${labels[i]}</h3> 
            <h3>${el[1]}</h3>
        </div>`
        ranksDiv.appendChild(ranksEl);
  });
}
showRank();


const executeChart = async() => {
  const d = await _fetchData();
  const values = []
  for (const el of d.user.wheelOfLife[0].slice(0,8)) {
      values.push(parseInt(el[1]))
  }
  const data = {
    labels: [
      "Health",
      "Friends & Family",
      "Fun, Leisure & Recreation",
      "Wealth",
      "Relationship",
      "Learning & Personal Growth",
      "Possession",
      "Career "
    ],
    datasets: [
      {
        label: "Wheel Of Life",
        data: values,
        backgroundColor: [
          '#22A7A0',
          '#1B6AB3',
          '#1BB355',
          '#1CBD87',
          '#14C926',
          '#FC49FC',
          '#E05841',
          '#E04191'
        ],
      },
    ],
  };
  const config = {
    type: "polarArea",
    data: data,
    options: {
      legend: {
        display: false,
      },
      scale: {
        display: false
      }
    }
  };

  var myChart = new Chart(document.getElementById("myChart"), config);
};
executeChart();