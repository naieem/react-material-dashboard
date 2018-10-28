var initialData = null;
var subscribingFnc = null;
var PlatformRedux = {
    dispatch: (data) => {

        switch (data.type) {
            case 'Add':

                initialData.push(data.payload);
                broadcast(initialData);
                break;
            default:
                break;
        }
    },
    broadcast: broadcast,
    createStore: createStore,
    subscriber: subscriber
}

function broadcast(initialstate) {
    subscribingFnc(initialstate);
}

function createStore(initialstate) {

    initialData = initialstate;
}
function subscriber(func) {

    subscribingFnc = func;
}
export default PlatformRedux;