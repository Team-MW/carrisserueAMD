export default async function checkToken(token: string) {
  const validationToken = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );

  const { success, score } = await validationToken.json();
  return { success, score };
}
