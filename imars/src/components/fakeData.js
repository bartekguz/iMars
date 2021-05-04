import img from '../assets/tlo.jpg';

export const Users = [
    {
        id:1,
        profilePicture: "https://eu.ui-avatars.com/api/?name=JK",
        username: "Jan Kowalski",
    },
    {
        id:2,
        profilePicture: "https://eu.ui-avatars.com/api/?name=KJ",
        username: "Kakub Jocek",
    },
    {
        id:3,
        profilePicture: "https://eu.ui-avatars.com/api/?name=KK",
        username: "Krzysztoś Karaf",
    },
    {
        id:4,
        profilePicture: "https://eu.ui-avatars.com/api/?name=GB",
        username: "Gartosz Buzik",
    },
    {
        id:5,
        profilePicture: "https://eu.ui-avatars.com/api/?name=HK",
        username: "Hamila Kydzik",
    }
];

export const Posts = [
    {
        id: 1,
        desc: "Love For All, Hatred For None.",
        photo: {img},
        date: "5 mins ago",
        userId: 1,
        like: 32,
        comment: 9,
    },
    {
        id: 2,
        photo: {img},
        date: "15 mins ago",
        userId: 2,
        like: 2,
        comment: 1,
    },
    {
        id: 3,
        desc: "Every moment is a fresh beginning.",
        photo: {img},
        date: "1 hour ago",
        userId: 3,
        like: 61,
        comment: 2,
    },
    {
        id: 4,
        photo: {img},
        date: "4 hours ago",
        userId: 4,
        like: 7,
        comment: 3,
    },
    {
        id: 5,
        photo: {img},
        date: "5 hours ago",
        userId: 5,
        like: 23,
        comment: 5,
    }
];