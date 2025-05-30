// function playVideo(videoID){
//     var iframe = document.createElement('iframe');
//     iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
//     iframe.style.width = '640px';
//     iframe.style.height = '360px';
//     iframe.style.border = '0';
//     document.getElementById('containVideo').appendChild(iframe);
// }


document.addEventListener("click", (event)=> {
    if(event.target.matches("a:not([class]):not([id])")) {
        console.log("clicked the link!!!!");
        
        let entLink = event.target.href + "";
        let link;
        for (let i = 0; i < entLink.length; i++){
            if (entLink.charAt(i) == '#'){
                link = entLink.slice(i + 1);
                break;
            }
        }
        console.log("link: " + link);
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