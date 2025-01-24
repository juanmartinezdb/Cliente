const supers = [];
window.onload = () => {
    fetch('./supers.json').then(res => {
        if (!res) {
            throw new Error('va a ser que ahí no está el json, échale un ojo');
        }
        return res.json();
    }).then(data => {
        console.log('recibido', data);
        supers.push(...data);
        constructorDOM();

    }).catch(e => {
        console.error('algo pasa con el fetch', e);

    });
}

const constructorDOM = () => {

}

