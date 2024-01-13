const courses = [
    {name:'Cyber Class', nameCourses: 'Network', modares: 'اشکان مقدس',img: 'image/network-for-pentester.jpg',see: 'network/video.html'},
    {name:'Cyber Class', nameCourses: 'Linux', modares: 'اشکان مقدس',img: 'image/linux-for-pentester.jpg',see:'linux/video.html'},
    {name:'Cyber Class', nameCourses: 'CEH', modares: 'اشکان مقدس',img: 'image/ceh-Ashkan.jpg',see:'#'},
    {name:'Cyber Class', nameCourses: 'CEH', modares: 'جادی میرمیرانی',img: 'image/ceh-jadi.jpg',see: '#'},
]
const contaniner = document.createElement('div')
contaniner.classList.add('cold')

courses.forEach(course =>{
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${course.img}">
    <h1>${course.name}</h1>
    <h1>دوره : ${course.nameCourses}</h1>
    <p>مدرس : ${course.modares}</p>
    <div class='aaa'>
        <a href="${course.see}" class='taga'>دیدن دوره</a>
    </div>
`;
    contaniner.appendChild(div)
})
const body = document.body;
body.append(contaniner)