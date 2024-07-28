import useHttpClient from "@/apis/utils/useHttpClient";

export const login = async (username: string, password: string) => {
  const {httpClient} = useHttpClient();
  try {
    const response = await httpClient.post('/api/auth/login', {
      username,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};