export default function auth(user, pass) {
    console.log('인증처리하기');
    if(user){
        console.log('username 있음');
    }else {
        console.log('username 없음');
    }
    if(pass){
        console.log('password 있음');
    }
}