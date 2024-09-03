// Verifica se a biblioteca Axios está carregada
if (typeof axios === 'undefined') {
    throw new Error('Axios library is not loaded');
}

// Cria uma instância personalizada do Axios
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
});