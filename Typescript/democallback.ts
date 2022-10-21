const element = document.getElementById("sample");
element?.addEventListener("click",listenerFunction);

function listenerFunction(this: HTMLElement){
    console.log("button clicked");
    const bgColor = this.style.background;

    if( bgColor=="blue"){
        this.style.background = "red"
    }else{
        this.style.background = "blue"
    }
}
