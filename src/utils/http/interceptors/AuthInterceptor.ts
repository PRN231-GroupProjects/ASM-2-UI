import { AxiosHeaders } from 'axios';

export function updateAuthorizationHeader(headers: AxiosHeaders) {
  // headers.set('User', userInfo.userId);
  // headers.set('Screen-Code', screenCd ?? ZERO);
  // headers.set('Branch-Number', branchNumber ?? PAD_2_DIGIT_ZERO);
  // "Access-Control-Allow-Origin": "*",
  // 	"Content-Type": "application/json",
  // 		Accept: "application/json"
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');
}
