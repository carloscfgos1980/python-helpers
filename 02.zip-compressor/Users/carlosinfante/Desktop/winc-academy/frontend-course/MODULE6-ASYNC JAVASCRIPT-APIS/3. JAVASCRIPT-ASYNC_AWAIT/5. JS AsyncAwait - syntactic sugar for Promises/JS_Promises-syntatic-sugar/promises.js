function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`)
        if (location === 'Google') {
            resolve('Google says Hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra information + ${response}`)
    })
}
/*
makeRequest('Google').then(response => {
    console.log('Response received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})
*/

// Same process from above but better to understand
async function doWork() {
    try {
        const response = await makeRequest('Google')
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

doWork();