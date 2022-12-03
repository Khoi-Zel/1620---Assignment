const colorChangeDarkTheme = document.querySelector('.Dark_Theme')
const colorChangeSideBar = document.querySelector('aside')
const colorChangeTextArea = document.querySelector('#textarea')

function changeColor(){
    if (colorChangeDarkTheme.textContent === 'Dark Theme'){
        colorChangeDarkTheme.textContent = 'Light Theme'
        colorChangeDarkTheme.classList.toggle("change_theme_Button");
        colorChangeSideBar.classList.toggle("change_theme_SideBar");
        colorChangeTextArea.classList.toggle("change_theme_TextArea");
    }

    else if (colorChangeDarkTheme.textContent === 'Light Theme'){
        colorChangeDarkTheme.textContent = 'Dark Theme'
        colorChangeDarkTheme.classList.toggle("change_theme_Button");
        colorChangeSideBar.classList.toggle("change_theme_SideBar");
        colorChangeTextArea.classList.toggle("change_theme_TextArea");
    }
}

colorChangeDarkTheme.addEventListener("click", changeColor);



