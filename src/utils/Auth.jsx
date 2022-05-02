export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  })
    // .then((res) => res.json())
    // .then((data) => {
    //   localStorage.setItem("token", data.token);
    // });
    .then(checkResponse)
};

// export const register = (password, email) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({password, email})
//   })
//   .then((response) => {
//     try {
//       if (response.status === 200){
//         return response.json();
//       }
//     } catch(e){
//       return (e)
//     }
//   })
//   .then((res) => {
//     return res;
//   })
//   .catch((err) => console.log(err));
// }; 

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }

  return response.json().then((res) => {
    throw res.message[0].messages[0].message;
  });
};