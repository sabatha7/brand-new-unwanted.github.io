$.ajax({
    url: 'http://192.168.8.12:57547/',
    method: 'POST',
    data: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    }),
    success: function (response) {
        console.log('Request completed', response);
    },
    error: function (error) {
        console.error('Error:', error);
    }
});

