export const ResumeInfo: Resume[]=[
    {
        id:1, 
        Name:"Test", 
        Phone:[
            "+380000000000",
            "+380000000001",
            "+380000000002"
        ],
        Email:[
            "test@test.com",
            "anothertest@test.com",
            "elsetest@test.com",
        ],
        City: "TestCity",
        Languages:[
            "C",
            "C+",
            "C++",
            "C-",
            "C--",
        ],
        WorkYear: 2.5,
        PhotoPath: ""
    },
    {
        id:2, 
        Name:"Test2", 
        Phone:[
            "+380000000003",
            "+380000000004",
            "+380000000005"
        ],
        Email:[
            "test1@test.com",
            "anothertest1@test.com",
            "elsetest1@test.com",
        ],
        City: "TestCity2",
        Languages:[
            "#C",
            "#C+",
            "#C++",
            "#C-",
            "#C--",
        ],
        WorkYear: 0.5,
        PhotoPath: ""
    }
]

export class Resume{
    id: number|undefined;
    Name: string|undefined;
    Phone: string[]|undefined;
    Email: string[]|undefined;
    City: string|undefined;
    Languages: string[]| undefined;
    WorkYear: number|undefined;
    PhotoPath: string|undefined;
  }
  