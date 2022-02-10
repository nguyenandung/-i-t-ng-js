class User {
      
// constructor - ham khoi tao doi tuong 
    constructor(name,group){
        this.name = name;
        this.group = group;
    }
    setName(newName){
        this.name = newName;
    }
    // danh sách method
    getInfo() {
        return "Name: "+this.name + " Group: "+ this.group;
    }
}