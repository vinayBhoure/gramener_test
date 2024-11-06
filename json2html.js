export default function json2html(data) {
    
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

    
    let html = `<table data-user="bhoure25@gmail.com">`;
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    html += `<tbody>`;

   
    data.forEach(row => {
        html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    });

    html += `</tbody></table>`;
    return html;
}
