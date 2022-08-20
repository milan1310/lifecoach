let outComeResult = JSON.parse(res);

let totalsArr = [];
outComeResult.forEach((d) => {
  totalsArr.push(parseInt(d.Total));
});

const sorted = totalsArr.sort(function (a, b) {
  return b - a;
});


let index = [];
sorted.forEach((d) => {
  let ind = outComeResult.findIndex((s) => {
    return s.Total === d.toString();
  });
  index.push(ind);
});

let n = 1;
const renderResult = (obj)=> {
    const app = document.getElementById('result_table');
    const tbody = document.createElement('tbody');
    tbody.innerHTML = `
      <tr>
        <th scope="row">${n}</th>
        <td>${obj.title}</td>
        <td>${obj.predict}</td>
        <td>${obj.Total}</td>
      </tr>
    `
    n++
    app.appendChild(tbody);
}

index.forEach((i) => {
  
    renderResult(outComeResult[i]);
});
