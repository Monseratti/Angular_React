export const Hobbies:UnusualHobbie[]=[
    {
        id : 1,
        title : "UnHobbie1",
        picturePath: "https://img.etimg.com/thumb/msid-62550755,width-650,height-488,imgsize-237578,,resizemode-75/.jpg",
        peoplePhotoPath: "somePath"
    },
    {
        id : 2,
        title : "UnHobbie2",
        picturePath: "https://img.etimg.com/thumb/msid-62550755,width-650,height-488,imgsize-237578,,resizemode-75/.jpg",
        peoplePhotoPath: "somePath"
    },
    {
        id : 3,
        title : "UnHobbie3",
        picturePath: "https://img.etimg.com/thumb/msid-62550755,width-650,height-488,imgsize-237578,,resizemode-75/.jpg",
        peoplePhotoPath: "somePath"
    }
]

export class UnusualHobbie{
    id:number|undefined;
    title:string|undefined;
    picturePath:string|undefined;
    peoplePhotoPath:string|undefined;
}