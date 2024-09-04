export default function auth(user, pass) {
    console.log('인증처리하기');
    if(!user){
        console.log('username 없어요');
    }
    if(!pass){
        console.log('password 없어요');
    }
}