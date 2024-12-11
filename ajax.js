async function transferJsonToEndpoint(jsonObject) {
    const endpoint = 'https://oky.exchange/api/transfer';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObject),
        mode: 'no-cors'
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

