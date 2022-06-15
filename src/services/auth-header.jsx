export default function authHeader() {
    const buyer = JSON.parse(localStorage.getItem("BUYER"));
  
    if (buyer && buyer.accessToken) {
      // For Spring Boot back-end
      return { Authorization: "Bearer " + buyer.accessToken };
  
      // for Node.js Express back-end
    //   return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }