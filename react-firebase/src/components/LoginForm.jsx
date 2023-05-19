import React, { useState } from 'react'
// 파이어베이스 초기화하면서 들고온 auth 
import { auth } from '../database/firebase';
// 파이어베이스에서 제공하는 메소드 가져옴
import {createUserWithEmailAndPassword} from "firebase/auth"

export default function LoginForm() {
    // input태그에 있는 값을 가져오는 state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // react가 실행되는 동안에 저장될 user데이터
    // accessToken은 세션이나 브라우저에 저장해서 로그인을 확인하는 용도로 쓰인다.
    // {email, uid, displayName} << 형태로
    const [user, setUser] = useState(null);

    // 이메일 로그인 메소드
    const onEmailLogin = (e) => {
        e.preventDefault();
        // 구글에서 제공하는 이메일 메소드 사용
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 회원가입에 성공했을 때
            const user = userCredential.user;
            console.log(user);
            setUser(
                {
                    uid:user.uid,
                    email : user.email,
                    displayName : user.displayName,
                }
            )
        })
        .catch((error) => {
            // 회원가입에 실패했을 때
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
  });
    }
  return (
    <div>
        <h3>로그인 폼입니다.</h3>
        <form onSubmit={onEmailLogin}>
            <label htmlFor="이메일">이메일</label>
            <input type="email" required
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
            />
            <br />
            <label htmlFor="비밀번호">비밀번호</label>
            <input type="password" required
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
            />
            <br />
            <input type="submit" value="회원가입"/>
        </form>
        <h3>{user ? user.email : "로그인되지 않았습니다."}</h3>
    </div>
  )
}
