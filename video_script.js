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
            $.each(srchItems, function(index, item){
            vidTitle = item.snippet.title;  
            vidThumburl =  item.snippet.thumbnails.default.url;                 
            vidThumbimg = '<pre><img id="thumb" src="'+
            vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';                   

            $('#results').append('<pre>' + vidTitle + vidThumbimg +   '</pre>');                      
    })  
  })  
}