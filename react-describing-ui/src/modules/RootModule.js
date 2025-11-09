import React from 'react'
import { greetA } from './ModuleA';
import { greetB } from './ModuleB';
import { greetC } from './ModuleC';


export function RootModule() {
    console.log('Hello from RootModule');
    greetA();
    greetB();
    greetC();

 
}

RootModule();