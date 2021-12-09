const fs = require('fs');
const fs = require('fs');
const filepath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json' );

module.exports = class Wish {
    constructor(wish){
        this.description = wish;
    }


    saveWish(){
        fs.readFile(filepath, (error, fileContent) =>{
            let wishes = [];

            if(!error){
                wishes = JSON.parse(fileContent)
            }
            else {
                console.log(error);
            }

            wishes.push(this);

            fs.writeFile(filepath, JSON.stringify(wishes), (error) => {
                if(!error){
                    console.log('wish saved');
                }
            });
        });
    }
}
