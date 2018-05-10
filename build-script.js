const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/elementsApp/scripts.js',
        './dist/elementsApp/runtime.js',
        './dist/elementsApp/polyfills.js',
        './dist/elementsApp/main.js'
    ]
    
    await concat(files, 'cust-elements.js')
    console.info('Elements created successfully!')

})()
