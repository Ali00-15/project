const articles = [
    {name:'Cyber Class', namearticles: 'sqlinjection', modares: 'میلاد رنجبر',img: 'img/sqli.PNG',articl: 'file/sqli.pdf'},
    {name:'Cyber Class', namearticles: 'کار با شل', modares: 'SS CYBER TEAM',img: 'img/shell.PNG',articl: 'file/HowToWorkWithWebShells.ss_syber_team.t.me.pdf'},
]
const contaniner = document.createElement('div')
contaniner.classList.add('cold')

articles.forEach(article =>{
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${article.img}">
    <h1>${article.name}</h1>
    <h1>مقاله : ${article.namearticles}</h1>
    <p>مدرس : ${article.modares}</p>
    <div class='aaa'>
        <a href="${article.articl}" class='taga' download>دانلود مقاله</a>
    </div>
`;
    contaniner.appendChild(div)
})
const body = document.body;
body.append(contaniner)