function Fetcheles()
{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(valasz => valasz.json())
    .then(valasz => Adatmegjelenites(valasz))
    .catch(hiba => console.log(hiba));
} 
function Adatmegjelenites(valasz)
{
    console.log(valasz)
    let table = '<table>'
    table += '<tr><td><Felhasználó</td><td>Sorszám</td><td>Leírás</td></tr>'
    valasz.foreach(item =>
        {
            table += `<tr>
            <td>${item[0].userId}</td>
            <td>${item[0].title}</td>
            <td>${item[0].id}</td>
            </tr>`
        });
        table += '</table>'
        document.getElementById('data').innerHTML = table;
}
window.onload = Fetcheles()
