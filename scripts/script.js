const DarkTheme = document.querySelector('.Dark_Theme')
const SideBar = document.querySelector('aside')
const TextArea = document.querySelector('#textarea')
let notesArray = [
    {title:"note one",body:"Note 1 ."},
    {title:"note two",body:"Note 2."}
]
const newNote = document.querySelector('.New_Note')
const notesList = document.querySelector('.note')

function changeColor(){
    if (DarkTheme.textContent === 'Dark Theme'){
        DarkTheme.textContent = 'Light Theme'
        DarkTheme.classList.toggle("change_theme_Button");
        SideBar.classList.toggle("change_theme_SideBar");
        TextArea.classList.toggle("change_theme_TextArea");
    }

    else if (DarkTheme.textContent === 'Light Theme'){
        DarkTheme.textContent = 'Dark Theme'
        DarkTheme.classList.toggle("change_theme_Button");
        SideBar.classList.toggle("change_theme_SideBar");
        TextArea.classList.toggle("change_theme_TextArea");
    }
}

DarkTheme.addEventListener("click", changeColor);


const CancelButton = document.querySelector(".Cancel")
const SaveButton = document.querySelector(".Save")

function HideandShow(){
    if (CancelButton.style.display === "none"){
        TextArea.style.display = "block";
        CancelButton.style.display = "block";
        SaveButton.style.display = "block";
    }
    else {
        TextArea.style.display = "none";
        CancelButton.style.display = "none";
        SaveButton.style.display = "none";
    }
}

function Show(){
    if (CancelButton.style.display === "none"){
        TextArea.style.display = "block";
        CancelButton.style.display = "block";
        SaveButton.style.display = "block";
    }
}

CancelButton.addEventListener("click", HideandShow);
newNote.addEventListener("click", Show)


let saveLog = (e)=>{
    let save = prompt('Your new note, please.', '')
    let newSave = {}
    let li = document.createElement('li')
    if(save !== null){
        newSave.title = save
        newSave.body = textBox.value
        notesArray.push(newSave)
        li.textContent = save
        notesList.append(li)
    }
}
SaveButton.addEventListener('click', saveLog)

let open = (e)=>{
    for (let i of notesArray){
        if (e.target.textContent === i.title){
            textBox.value = i.body
        }
    }
}
notesList.addEventListener('click', open)


