const fs = require('fs');
const path = require('path');


class LocalStorage {
    constructor(){
        this.STORAGE_FILE = path.join(__dirname.split('src')[0], 'storage.json');
    }

    dirName(){ //Eliminir despues
        console.log(this.STORAGE_FILE)
    }

    loadStorage() {
        try {
            return JSON.parse(fs.readFileSync(this.STORAGE_FILE, 'utf8'));
        } catch {
            return {};
        }
    }

    saveStorage(data) {
        fs.writeFileSync(this.STORAGE_FILE, JSON.stringify(data, null, 2));
    }

    storage(key, value) {
        const data = this.loadStorage();
        if (value === undefined) return data[key]; // getter
        data[key] = value; // setter
        this.saveStorage(data);
        return value;
    }
}

export default new LocalStorage();
