export const isAuth = (): boolean => localStorage.getItem("token") !== null;
export const login = (token: string): void => localStorage.setItem("token", token);
export const logout = (): void => localStorage.removeItem("token");
export const getToken = (): string => localStorage.getItem("token");
