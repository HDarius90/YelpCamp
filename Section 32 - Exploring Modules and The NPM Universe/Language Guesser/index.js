let words = process.argv[2];
// const franc = require('franc');
import {franc, francAll} from 'franc'
import langs from 'langs';
let lngCode = franc(words);
let lng = langs.where("3", lngCode);
console.log(lng.name);