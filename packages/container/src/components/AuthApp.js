import React,{useRef, useEffect} from "react";
import {mount as markertingMount} from 'mod_auth/authIndex';

export default () => {
    const ref = useRef(null);
    useEffect(()=>{
        markertingMount(ref.current);
    });
  return <div ref={ref}></div>;
};

