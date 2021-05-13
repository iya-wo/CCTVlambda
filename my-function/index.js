exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return getItem(event);
    }
    if (event.httpMethod == 'POST') {
        return createMap(event);
    }
};

const getItem = event => {
    let item = [
        {
        "description":"Paddington Station","location":"Praed Street, London W2 1HB","latitude":"51.51658", "longitude": "-0.17566","cameras": 5
        },
        {
        "description":"Buckingham Palace","location":"London SW1A 1AA","latitude":"51.501476", "longitude": "-0.140634","cameras":264
        },
        {
        "description":"Hyde Park","location":"London","latitude":"51.508610", "longitude": "-0.163611","cameras":66
        },
        {
        "description":"Shakespeare's Globe","location":"21 New Globe Walk, London, SE1 9DT","latitude":"51.509865", "longitude": "-0.118092","cameras":83
        },
        {
        "description":"The O2","location":"Peninsula Square, London SE10 0DX","latitude":"51.5030", "longitude":"0.0032"  ,"cameras":481
        },
        {
        "description":"Principle One","location":"92 Albert Embankment","latitude":"51.4888", "longitude": "-0.1235","cameras":82
        }
];
    return {
        statusCode: 200,
        body: JSON.stringify(item)
    };
}

const createMap = event => {
    let body = JSON.parse(event.body);
    console.log('successfully pushed to GitHub', body);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'The map was created'
        })
    }
}