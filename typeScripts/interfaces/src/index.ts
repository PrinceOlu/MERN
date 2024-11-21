// Interfaces
interface Author {
    name: string;
    avatar: string;
}

const author1: Author = { name: "Prince", avatar: "/img/prince.png" };

interface Post {
    title: string;
    body: string;
    tags: string[];
    create_at: Date;
    author: Author;
}

const newPost: Post = {
    title: "my first post",
    body: "body of my first post",
    tags: ["movie", "coding"],
    create_at: new Date(),
    author: author1
};
console.log(newPost);
