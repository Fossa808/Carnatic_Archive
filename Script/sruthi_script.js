//Checks for if a link has been clicked
document.addEventListener("click", (event)=> {

    //Checks if the link clicked doesn't have a class or ID
    if(event.target.matches("a:not([class]):not([id])")) {
        console.log("clicked the link!!!!");
        
        //Get the scale and pitch from the link
        let entLink = event.target.href + "";
        let link;
        
        //Slice the link to just get the specific scale and pitch
        for (let i = 0; i < entLink.length; i++){
            if (entLink.charAt(i) == '#'){
                link = entLink.slice(i + 1);
                break;
            }
        }

        //Put the link of the video that's connected to the scale and pitch into an iframe
        var iframe = document.createElement('iframe');
        iframe.src = document.getElementById(link).href;
        console.log("src: " + iframe.src);
        iframe.style.width = '640px';
        iframe.style.height = '360px';
        iframe.style.border = '0';
        document.getElementById('containVideo').replaceChildren();
        document.getElementById('containVideo').appendChild(iframe);
    }
});