const total = document.querySelectorAll('[data-ns-test="price"]');



let answer = 0;


for(let i=0;i<total.length;i++){
    answer = answer + parseInt(total[i].textContent);
	
}

const table = document.getElementsByTagName('table');


const tableRow = document.createElement('tr');

const tableData = document.createElement('td');

tableData.setAttribute('data-ns-test', 'grandTotal');

tableData.innerText = answer;


tableRow.appendChild(tableData);

table[0].appendChild(tableRow);


