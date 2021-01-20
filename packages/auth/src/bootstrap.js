import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// mount function to start the app
const mount = (el) => {
    ReactDOM.render(<App/>, el);
};
// if we are running in development and in isolation,
// call the mount immediately
if(process.env.NODE_ENV == 'development'){
    const element = document.querySelector('#_id-auth');
    if(element){
        mount(element);
    }
}
// we are running through container
// and we should export the mount function
export { mount };