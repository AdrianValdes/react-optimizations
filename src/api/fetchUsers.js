export const returnUsers = async (amount) => {
    const usersPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = Array.from({length: amount}, (_, i) => i);
            resolve(users);
        }, 100);
    });
    const data = await usersPromise;
    return data;
};
