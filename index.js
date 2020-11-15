// Import stylesheets
import "./style.css";

// Write Javascript code!

function getUserID() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("get user");
      res({ userID: 1 });
    }, 3000);
  });
}
function getDetail(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("get User Details");
      res({ userId: id, userName: "kushan", age: 30, status: "live" });
    }, 5000);
  });
}

async function getAsync() {
  let user = await getUserID();
  let data = await getDetail(user.userID);
  console.log(data);
}

getAsync();
