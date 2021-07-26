
const BASE_URL = 'https://mxz0fg1wda.execute-api.ap-southeast-1.amazonaws.com';

export const fetchOtp = async (email: string) => {
  return await fetch(`${BASE_URL}/v1/auth/get_otp_email`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({email})
  })
}

export const fetchToken = async (email: string, otp: string) => {
  return await fetch(`${BASE_URL}/v1/auth/get_jwt_token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({email, otp})
  })
}

export const fetchApps = async () => {
  return await fetch(`${BASE_URL}/v1/auth/get_apps`);
}