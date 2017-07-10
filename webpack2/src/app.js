//jshint esversion:6
require('./style/globalStyle.css');

const messages = require('./message.js');

import Button from './button';
import Image from './image';
import Space from './imgspace';
import {add} from './mathStuff';

const newMessage = () => ('<p>' + (messages.message) + " " + (messages.mes) + '</p>');
const newButton = () => (Button.button);
const math = () => (add(3,3));
const newImage = () => Image + Space;


const app = document.getElementById('app');
app.innerHTML= newButton() + newMessage() + math() + newImage();

Button.attachEl();