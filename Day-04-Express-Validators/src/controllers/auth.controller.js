export async function registerUser(req, res, next) {
  try {
    const error = new Error("User already exists with same email");
    error.status = 409;
    throw error;
  } catch (err) {
    next(err);
  }
}