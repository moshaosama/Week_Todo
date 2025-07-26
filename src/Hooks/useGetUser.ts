const useGetUser = () => {
  const userStr =
    typeof window !== "undefined" ? window.localStorage.getItem("User") : null;

  let user = null;
  if (userStr) {
    try {
      user = JSON.parse(userStr);
    } catch {
      user = null;
    }
  }

  return { user };
};

export default useGetUser;
