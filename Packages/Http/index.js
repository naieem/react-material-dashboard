import {from} from 'rxjs';

var Http = {
    get: get,
    post: post
}
function post(url, payload,headers) {
    var xhr = new XMLHttpRequest();
    var returnedValue = new Promise((resolve, reject) => {

        xhr.open('POST', url, true);
        if(headers && headers.length){
            headers.forEach((res)=>{
                xhr.setRequestHeader(res.key, res.value);
            });
        }

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
            else if (xhr.status !== 200) {
                resolve({
                    status: 1,
                    success: false,
                    data: xhr.response
                });
            }
        };
        xhr.send(JSON.stringify(payload));
    });
    return from(returnedValue);
}
function get(url,headers) {
    var xhr = new XMLHttpRequest();
    var returnedValue = new Promise((resolve, reject) => {
        xhr.open('GET', url, true);
        if(headers && headers.length){
            headers.forEach((res)=>{
                xhr.setRequestHeader(res.key, res.value);
            });
        }
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
            else if (xhr.status !== 200) {

                resolve({
                    status: 1,
                    success: false,
                    data: xhr.response
                });
            }
        };
        xhr.send();
    });
    return from(returnedValue);
}

export default Http;