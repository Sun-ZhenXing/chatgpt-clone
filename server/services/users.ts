import type { User } from '@prisma/client'
import prisma from '../db'

const userSelect = {
  id: true,
  username: true,
  nickname: true,
  email: true,
  phone: true,
  gender: true,
  role: true,
  created_at: true,
  updated_at: true,
}

export async function createUser(data: User) {
  const user = await prisma.user.create({
    data,
  })
  return user
}

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: userSelect,
  })
  return users
}

export async function getUsersPage(page: number, limit: number) {
  const users = await prisma.user.findMany({
    select: userSelect,
    skip: (page - 1) * limit,
    take: limit,
  })
  return users
}

export async function getUserById(id: number) {
  const user = await prisma.user.findUnique({
    select: userSelect,
    where: {
      id,
    },
  })
  return user
}

export async function getUserByUsername(username: string) {
  const user = await prisma.user.findUnique({
    select: userSelect,
    where: {
      username,
    },
  })
  return user
}

export async function updateUser(id: number, data: User) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  })
  return user
}

export async function deleteUser(id: number) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      is_deleted: 1,
    },
  })
  return user
}
