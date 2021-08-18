import { Model } from 'racer';
import { promisifyAll } from 'bluebird';
// import Global from './GlobalModel'
// import Table from './TableModel'

// Promisify the default model methods like subscribe, fetch, set, push, etc.
promisifyAll(Model.prototype)
debugger;
export default function(racer) {
//   racer.orm('', Global, 'Global')
//   racer.orm('$tables.*', Table, 'Table')
}
