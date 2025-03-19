function keyWordsearch(){
    console.log("keyWordsearch start");
    gapi.client.setApiKey('AIzaSyAtQCJDqcXmOMRKrHDJ7JC8ankZHpxpI-U');
    gapi.client.load('youtube', 'v3', function(){
            makeRequest();
    });
}
function makeRequest(){
    var q = $('#query').val();
    console.log(q);
    var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            maxResults: 10
    });
    request.execute(function(response)  {                                                                                    
            $('#results').empty()
            var srchItems = response.result.items;  
            var videoTypeId = response.result.items[0].id;             
            $.each(srchItems, function(index, item){
                var videoSnippet = response.result.item.snippet;
                var vidId = videoTypeId.videoId;
                var vidTitle = videoSnippet.title;
                var vidUrl = `https://www.youtube.com/watch?v=${vidId}`;
                var vidThumburl =  item.snippet.thumbnails.default.url;                 
                var vidThumbimg = '<pre><img id="thumb" src="'+
                vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';
                console.log(vidId);
                console.log(videoTypeId);
                console.log(videoSnippet);
                console.log(vidTitle);
                console.log(vidThumburl)

                $('#results').append('<pre>' + vidTitle + vidThumbimg + vidUrl + '</pre>');
                
        //     var i = 0;
        //     while(i < 10){
        //         var videoTypeId = response.result.items[i].id;
        //         var videoSnippet = response.result.items[i].snippet;
        //         var vidId = videoTypeId.videoId;
        //         var vidTitle = videoSnippet.title;
        //         var vidUrl = `https://www.youtube.com/watch?v=${vidId}`;
        //         var vidThumburl =  item.snippet.thumbnails.default.url;                 
        //         var vidThumbimg = '<pre><img id="thumb" src="'+
        //         vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';
        //         console.log(vidId);
        //         console.log(videoTypeId);
        //         console.log(videoSnippet);
        //         console.log(vidTitle);
        //         console.log(vidThumburl)

        //         $('#results').append('<pre>' + vidTitle + vidThumbimg + vidUrl + '</pre>');
        //         i++;
        //     }

                
                                      
    })  
  })  
}