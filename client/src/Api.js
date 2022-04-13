import axios from "axios";

// export const URL = "http://localhost.com/4000"

const cookieOption = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const postSignIn = async (body) => {
  try {
    console.log("입성");
    console.log("body", body);

    const data = await axios.post("http://localhost:4000/user/signin", body, cookieOption);
    console.log("2차입성");
    return data;
  } catch (e) {
    throw e;
  }
};
