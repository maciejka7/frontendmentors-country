
const toogleTheme = (cb?: Function) => {
    document.querySelector(':root')?.classList.toggle('dark')
    cb ? cb(): null ;
}

export const darkModeValue = window.localStorage.getItem('dark-mode');

const setLocalStorageValue = () => {

    darkModeValue === 'false'
        ? window.localStorage.setItem('dark-mode', 'true')
        : window.localStorage.setItem('dark-mode', 'false')
}

export const setup = () => {
    darkModeValue === 'false'
        ? document.querySelector(':root')?.classList.remove('dark')
        : document.querySelector(':root')?.classList.add('dark')
}

export const changeTheme = () => { 
    toogleTheme(setLocalStorageValue)
}