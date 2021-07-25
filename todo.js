const addToDo = document.querySelector('.add');
const todo = document.querySelector(".todo");
const search = document.querySelector(".search input");

const add = (title,content) =>{
    let html = `
        <div class="col-sm-12 col-lg-6 my-3">
            <div class="card" style="background-color: #EDF5E1;">
                <div class="card-body">
                    <h5 class="card-title text-center">${title}</h5>
                    <p class="card-text lead">${content}</p>
                    <i class="far fa-trash-alt float-right delete"></i>
                </div>
            </div>
        </div>
    `
    todo.innerHTML += html;
};  

addToDo.addEventListener('submit', e=>{
    e.preventDefault();
    let elements = addToDo.elements;
    let canAdd = true;
    for(let i=0; i<elements.length ; i++){
        if(!elements[i].value.trim()){
            canAdd = false;
            break;
        }
    }
    console.log(canAdd);

    if(canAdd){
        add(elements[0].value,elements[1].value);
        addToDo.reset();
    }
});

todo.addEventListener('click',e=>{
    if(e.target.classList.contains("delete")){
        console.log(e.target.parentElement.parentElement.parentElement.remove());
    }
});


const filter = text =>{
    Array.from(todo.children)
        .filter (item => !item.textContent.includes(text))
        .forEach( element => {
            element.classList.add('remove');
    });

    Array.from(todo.children)
        .filter (item => item.textContent.includes(text))
        .forEach( element => {
            element.classList.remove('remove');
    });
};

search.addEventListener('keyup',e=>{
    let text = e.target.value.trim();
    filter(text);
});