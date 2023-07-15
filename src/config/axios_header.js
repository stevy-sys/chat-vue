let header = {
    'Content-Type': 'application/json',
};

const updateTokenHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        header.Authorization = `Bearer ${token}`;
    } else {
        delete header.Authorization;
    }
};

updateTokenHeader();

export const headers = header;