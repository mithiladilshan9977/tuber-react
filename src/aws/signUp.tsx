import { Auth } from "aws-amplify";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

export async function signUp({
  username,
  password,
  email,
  phone_number,
}: SignUpParameters) {
  const { userSub } = await Auth.signUp({
    username,
    password,
    attributes: {
      email,
      phone_number,
    },
    autoSignIn: {
      enabled: false,
    },
  });
  return userSub;
}
