export const scrollWithoffset = (e: HTMLElement, correction?: number) => {                    
    const navBar = document.querySelector(".contMenu") as HTMLDivElement;                        //Ajuste de offset con el link de contacto
    const altoNavBar = navBar.offsetHeight;
    const ypos = e.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: ypos - (altoNavBar) + (correction || 0), behavior: "smooth"});
}
