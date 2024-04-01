"use server";

import prisma from "@/db";
import { sign } from "jsonwebtoken";

const SECRET_KEY = "visualsecretkey";

export async function signup(name: string, email: string, password: string) {
  try {
    //Find if user already exists
    const isExistingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (isExistingUser) {
      return false;
    }

    //Create a new user
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return sign(newUser, SECRET_KEY);
  } catch (e) {
    return false;
  }
}

export async function signin(email: string, password: string) {
    try{
  //Find if user already exists
  const isExistingUser = await prisma.user.findUnique({
    where: {
      email: email,
      password: password
    },
  });
  console.log(isExistingUser)
  if (!isExistingUser) {
    return false;
  }
  console.log(sign(isExistingUser, SECRET_KEY))

  return sign(isExistingUser, SECRET_KEY);
    }
    catch (e){
        return false
    }

}
