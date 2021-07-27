import userStore from "./userStore"

const BASE_URL = 'https://u7yhkrlx15.execute-api.ap-southeast-1.amazonaws.com';

export const sendFetch = async (url:string, options: RequestInit) => {
  return await fetch(BASE_URL+url, {...options, headers: {...options.headers, authorization: `Bearer ${userStore.getToken()}`, 'Content-Type': 'application/json'}})
}

export const fetchProfiles = async (emails:string[], emp_nums:string[]) => {
  return await sendFetch('/v1/profiles/fetch_by_json', {
    method: 'POST',
    body: JSON.stringify({emails, emp_nums}),
  })
}

export const fetchCSV = async (emails:string[], emp_nums:string[]) => {
  return await sendFetch('/v1/profiles/fetch_by_csv', {
    method: 'POST',
    body: JSON.stringify({emails, emp_nums}),
  })
}

