function printUserInfo(user: { name: string; email?: string }) {
    console.log(`Name: ${user.name}`);

    // Check if 'email' exists before using it
    if (user.email) {
        console.log(`Email: ${user.email}`);
    } else {
        console.log('Email not provided');
    }
}

printUserInfo({ name: "Snehil" });          // No email provided
printUserInfo({ name: "Ravi", email: "ravi@gmail.com" });  // Email provided

export {}