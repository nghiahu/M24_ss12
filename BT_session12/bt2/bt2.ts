class Employeess{
    public name:string
    protected company:string
    private phones:string
    constructor(name:string,company:string,phones:string){{
        this.name = name
        this.company = company
        this.phones = phones
    }}

    printInfo():void{{
        console.log("name: ",this.name);
        console.log("company: ",this.company);
        console.log("phones: ",this.phones);
    }}
}
class Managers extends(Employeess){
    teamSize:number
    constructor(name:string,company:string,phones:string,teamSize:number){
        super(name,company,phones)
        this.name = name
        this.company = company
        this.phones = phones
        this.teamSize = teamSize
    }
    printInfo():void{{
        console.log("name: ",this.name);
        console.log("company: ",this.company);
        console.log("phones: ",this.phones);
        console.log("teamSize: ",this.teamSize);
    }}
}

let manager1 = new Managers("Nam","rikkeisoft","0932553763",5)

manager1.printInfo();