//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { typeApiToBd } = require('./src/TypeApiToBd/TypeApiToBd.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {//sync para hacer la comunicacion, sincronizar todos los modelos definidos en la base de datos*/
  /* force: true => es para que se este actualizando la tabla cuando este actualizando
la informacion en js. Puede ser alter:true que es para actualizar solo lo que se modifique de la tabla, este mas usado al crear pagina*/
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    //typeApiToBd()
  });
});
