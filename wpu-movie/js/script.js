$('#search-button').on('click', function () {

    $.ajax({
        url: 'https://www.omdbapi.com/',
        type:'get',
        dataType: 'json',
        data: {
            'apikey' : '9c0a051e',
            's' : $('#search-input').val()
        },
        success: function (result){
           if(result.Response == "True") {

           } else {
            $('#movie-list').html('<h1 class="text-center">Movie Not Found!</h1>')
           }
        }
    });

}); 