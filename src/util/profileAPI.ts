import userStore from "./userStore"

export const sendFetch = async (url:string, options: RequestInit, body?: any) => {
  return await fetch(url, {...options, headers: {...options.headers, authorization: `Bearer ${userStore.getToken()}`, 'Content-Type': 'application/json'}, body})
}

// export const 

