import stylis from 'stylis/stylis.js';
import plugin from './build.js';

stylis.use(plugin);

const result = stylis('.my-class',  `
  background: #fff;
  color: #ddd;
  transform: none;

  .other {
    font: inherit;
  }
`);

console.log(result);