var users = [
    { username: "Prince", role: "guest" },
    { username: "Ade", role: "member" },
    { username: "Mofe", role: "admin" },
];
function fetUserDetails(username) {
    var userdetails = users.find(function (user) { return user.username === username; });
    if (userdetails) {
        return userdetails;
    }
    else {
        throw new Error("error");
    }
}
