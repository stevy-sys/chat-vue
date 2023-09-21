let header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    "Accept" : "*/*"
};

export const headers = header;