export class FamousPeopleServise{
    private data:string[]=[
        "FP1",
        "FP2",
        "FP3"
    ]
    constructor(){}
    get():string[]{
        return this.data;
    }
    add(data:string):void{
        this.data.push(data);
    }
}