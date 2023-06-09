export const exist = JSON.parse(localStorage.getItem("user"))?.user_token
export const config = { headers: { Authorization: `Bearer ${localStorage.getItem('user_token')}` } }
export const userImage = JSON.parse(localStorage.getItem("user"))?.user_photo