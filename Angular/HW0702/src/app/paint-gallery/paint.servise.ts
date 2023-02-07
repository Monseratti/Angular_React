import { Paint } from "./paint";

export class PaintGallery{
    private data:Paint[]=[
        {name:"Mona Lisa", author:"Leonardo Da Vinci", year:1519,plase:"Louvre",size:"1000x2000",photoPath:"https://media.timeout.com/images/103166731/750/562/image.jpg"},
        {name:"Girl with a Pearl Earring", author:"Johannes Vermeer", year:1665,plase:"Louvre",size:"1000x2000",photoPath:"https://media.timeout.com/images/103166735/750/562/image.jpg"},
        {name:"The Starry Night", author:"Vincent van Gogh", year:1889,plase:"Louvre",size:"1000x2000",photoPath:"https://media.timeout.com/images/103166739/750/562/image.jpg"},
        {name:"The Kiss", author:"Gustav Klimt", year:1908,plase:"Louvre",size:"1000x2000",photoPath:"https://media.timeout.com/images/103166743/750/562/image.jpg"},
    ]
    get():Paint[]{
        return this.data;
    }
}