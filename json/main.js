// kono akti object k stringify kore patanor jonno seita k stringify akare convert korte hoi stringify kore

const user={
    id:100,
    name:'sabbir',
    phone:1245,

};
const userInfo=JSON.stringify(user);
console.log(userInfo);



// knu data server theke object k stringify akare dile seita k parse kore nite hobe
const userData=JSON.parse(userInfo);
console.log(userData);
