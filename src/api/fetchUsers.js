export const returnUsers = async () => {
    const usersPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3]);
        }, 100);
    });
    const data = await usersPromise;
    return data;
};
