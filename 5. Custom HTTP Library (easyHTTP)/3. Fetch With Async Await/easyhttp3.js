
class EasyHTTP {
    // Get request
    async get(url) {
        const response = await fetch(url);
        const resdata = await response.json()
        return resdata;
    }

    // Post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resdata = await response.json()
        return resdata;
    }

    // Put request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resdata = await response.json()
        return resdata;
    }

    // Delete request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resdata = await response.json()
        return "Resource Deleted";
    }

}