import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
    {
      _id: userIds[0],
      firstName: "Avay",
      lastName: "Karkidoli",
      email: "avaykarkidoli@gmail.com",
      password: "avaykarkidoli123",
      picturePath: "p11.jpeg",
      friends: [],
      location: "Darjeeling",
      occupation: "CSE Undergrad",
      viewedProfile: 14561,
      impressions: 888822,
      createdAt: 1115211422,
      updatedAt: 1115211422,
      __v: 0,
    },
    {
      _id: userIds[1],
      firstName: "Sumangal",
      lastName: "Chhetri",
      email: "sumangalchhetri@gmail.com",
      password: "sumangalchhetri123",
      picturePath: "p3.jpeg",
      friends: [],
      location: "Siliguri",
      occupation: "Technician",
      viewedProfile: 12351,
      impressions: 55555,
      createdAt: 1595589072,
      updatedAt: 1595589072,
      __v: 0,
    },
    {
      _id: userIds[2],
      firstName: "Udyan",
      lastName: "Gahatraj",
      email: "udyangahatraj@gmail.com",
      password: "udyangahatraj123",
      picturePath: "p4.jpeg",
      friends: [],
      location: "Siliguri",
      occupation: "Gymbro",
      viewedProfile: 4468,
      impressions: 19986,
      createdAt: 1288090662,
      updatedAt: 1288090662,
      __v: 0,
    },
    {
      _id: userIds[3],
      firstName: "Md Rehan",
      lastName: "Fazal",
      email: "rehanfazal@gmail.com",
      password: "rehanfazal123",
      picturePath: "p6.jpeg",
      friends: [],
      location: "Bihar",
      occupation: "CEO",
      viewedProfile: 41024,
      impressions: 55316,
      createdAt: 1219214568,
      updatedAt: 1219214568,
      __v: 0,
    },
    {
      _id: userIds[4],
      firstName: "Abhi",
      lastName: "Kotwal",
      email: "abhikotwal@gmail.com",
      password: "abhikotwal123",
      picturePath: "p5.jpeg",
      friends: [],
      location: "Siliguri",
      occupation: "Social worker",
      viewedProfile: 40212,
      impressions: 7758,
      createdAt: 1493463661,
      updatedAt: 1493463661,
      __v: 0,
    },
    {
      _id: userIds[5],
      firstName: "Shantanu",
      lastName: "Kumar",
      email: "shantanukumar@gmail.com",
      password: "shantanukumar123",
      picturePath: "p7.jpeg",
      friends: [],
      location: "India",
      occupation: "Engineeer",
      viewedProfile: 976,
      impressions: 4658,
      createdAt: 1381326073,
      updatedAt: 1381326073,
      __v: 0,
    },
    {
      _id: userIds[6],
      firstName: "Koshish",
      lastName: "Subba",
      email: "koshishsubba@gmail.com",
      password: "koshishsubba123",
      picturePath: "p8.jpeg",
      friends: [],
      location: "India",
      occupation: "Web developer",
      viewedProfile: 1510,
      impressions: 77579,
      createdAt: 1714704324,
      updatedAt: 1642716557,
      __v: 0,
    },
    {
      _id: userIds[7],
      firstName: "Aaron",
      lastName: "Subba",
      email: "aaronsubba@gmail.com",
      password: "aaronsubba123",
      picturePath: "p9.jpeg",
      friends: [],
      location: "Sukna",
      occupation: "Professional Hacker",
      viewedProfile: 19420,
      impressions: 82970,
      createdAt: 1369908044,
      updatedAt: 1359322268,
      __v: 0,
    },
  ];

  export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        firstName: "Avay",
        lastName: "Karkidoli",
        location: "Darjeeling",
        description: "hi",
        picturePath: "post1.jpeg",
        userPicturePath: "p11.jpeg",
        likes: new Map([
          [userIds[1], true],
          [userIds[2], true],
          [userIds[3], true],
          [userIds[4], true],
        ]),
        comments: [
          "nice",
          "nice",
          "nice",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: "Sumangal",
        lastName: "Chhetri",
        location: "Siliguri",
        description:
          "Handsome i am very much",
        picturePath: "post2.jpeg",
        userPicturePath: "p3.jpeg",
        likes: new Map([
          [userIds[7], true],
          [userIds[4], true],
          [userIds[1], true],
          [userIds[3], true],
        ]),
        comments: [
            "nice",
            "nice",
            "nice",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[2],
        firstName: "Udyan",
        lastName: "Gahatraj",
        location: "ghar",
        description:
          "stronk i am very",
        picturePath: "post3.jpeg",
        userPicturePath: "p4.jpeg",
        likes: new Map([
          [userIds[1], true],
          [userIds[6], true],
          [userIds[3], true],
          [userIds[5], true],
        ]),
        comments: [
            "nice",
            "nice",
            "nice",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: "Md Rehan",
        lastName: "Fazal",
        location: "home",
        description:
          "CEO i want job",
        picturePath: "post4.jpeg",
        userPicturePath: "p6.jpeg",
        likes: new Map([
          [userIds[1], true],
          [userIds[6], true],
          [userIds[0], true],
        ]),
        comments: [
            "nice",
            "nice",
            "nice",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],
        firstName: "Koshish",
        lastName: "Subba",
        location: "India",
        description:
          "I am Koshish",
        picturePath: "post5.jpeg",
        userPicturePath: "p8.jpeg",
        likes: new Map([
          [userIds[1], true],
          [userIds[3], true],
          [userIds[5], true],
          [userIds[7], true],
        ]),
        comments: [
            "nice",
            "nice",
            "nice",
        ],
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: "Aaron",
        lastName: "Subba",
        location: "Sukna",
        description:
          "helo",
        picturePath: "post6.jpeg",
        userPicturePath: "p9.jpeg",
        likes: new Map([
          [userIds[1], true],
          [userIds[2], true],
        ]),
    
        comments: [
            "nice",
            "nice",
            "nice",
        ],
      },
  ];