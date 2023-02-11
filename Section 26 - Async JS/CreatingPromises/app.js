/* const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay)
}

delayedColorChange('olive',1000, () => {
    delayedColorChange('teal',1000, () => {
        delayedColorChange('orange',1000, () => {
            delayedColorChange('green',1000, () => {
                delayedColorChange('blue',1000, () => {
        
                })
            })
        })
    })
}) */

const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    }) 
}

delayedColorChange('olive', 1000)
.then(()=> (delayedColorChange('violet', 1000)))
.then(()=> (delayedColorChange('orange', 1000)))
.then(()=> (delayedColorChange('pink', 1000)))
.then(()=> (delayedColorChange('red', 1000)))
