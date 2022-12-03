const DarkTheme = document.querySelector('.Dark_Theme')
const SideBar = document.querySelector('aside')
const TextArea = document.querySelector('#textarea')

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

CancelButton.addEventListener("click", HideandShow);


