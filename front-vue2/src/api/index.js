import axios from 'axios';
import store from '@/store/index';
import { setInterceptors } from './common/interceptor';
// import { setInterceptors } from './common/interceptor';

// function createInstance() {
// 	const instance = axios.create({
// 		baseURL: process.env.VUE_APP_API_URL,
// 	});
// 	return setInterceptors(instance);
// }
// const instance = createInstance();

// const instance = axios.create({
// 	baseURL:"http://localhost:8080/",
// 	headers:{
// 		// cors로 인해 주석 처리 
// 		// Authorization : store.state.auth.token,
// 	}
// })

function loginUser(userData) {
	const url = 'http://localhost:3005/login';
	return axios.post(url, userData);
}
function registerUser(userData) {
	const url = 'http://localhost:3005/user';
	return axios.post(url, userData);
}
export { loginUser, registerUser };
// axios의 api 함수 구조화

function createInstanceWithAuth(url) {
	const instance = axios.create({
		// baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
		baseURL:`http://localhost:3002/${url}`
	});
	return setInterceptors(instance);
}
function createInstanceWithAuth2(url) {
	const instance = axios.create({
		// baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
		baseURL:`http://localhost:3003/${url}`
	});
	return setInterceptors(instance);
}
function createInstanceWithAuth3(url) {
	const instance = axios.create({
		// baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
		baseURL:`http://localhost:3009/${url}`
	});
	return setInterceptors(instance);
}
export const goods = createInstanceWithAuth('goods');
export const user = createInstanceWithAuth('user');

// 추후 리팩토링이 필요함(goods->items)
export const items = createInstanceWithAuth2('items');
export const wish= createInstanceWithAuth2('wish');
export const blame= createInstanceWithAuth2('blame');

// mypage 부분
export const mypage = createInstanceWithAuth3('mypage');


