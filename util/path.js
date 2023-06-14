//finding directory of parents
const path=require('path');

//depreciated
// module.exports=path.dirname(process.mainModule.filename);

module.exports=path.dirname(require.main.filename);