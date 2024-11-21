type UserRole = "guest" | "member" | "admin";

type User = {
    id: number;
    username: string;
    role: UserRole;
};

const users: User[] = [
    { id: 1, username: "Prince", role: "guest" },
    { id: 2, username: "Ade", role: "member" },
    { id: 3, username: "Mofe", role: "admin" },
];

// Function to get user details by username
function getUserDetails(username: string): User {
    const userDetails = users.find((user) => user.username === username);
    if (userDetails) {
        return userDetails;
    } else {
        throw new Error(`User with username "${username}" not found.`);
    }
}

// Function to update user
function updateUser(id: number, updates: Partial<User>): void {
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        console.log(`User with ID "${id}" not found.`);
        return;
    }

    // Validate role update if provided
    if (updates.role && !["guest", "member", "admin"].includes(updates.role)) {
        console.log(`Invalid role: "${updates.role}". Allowed roles are: "guest", "member", "admin".`);
        return;
    }

    // Use Object.assign to update the user in place
    Object.assign(foundUser, updates);
}

// Call updateUser function
updateUser(1, { username: "Ojugbele" }); // Update username
updateUser(1, { role: "admin" });        // Update role to valid value


// Log users array to verify updates
console.log(users);

// Example usage of getUserDetails
try {
    console.log(getUserDetails("Prince")); // { id: 1, username: "Prince", role: "guest" }
    console.log(getUserDetails("NonexistentUser")); // Throws error
} catch (error) {
    console.error(error.message); // Logs the descriptive error message
}
