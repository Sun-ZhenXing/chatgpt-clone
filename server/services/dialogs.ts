import type { Dialog } from '@prisma/client'
import prisma from '../db'

const dialogSelect = {
  id: true,
  user_id: true,
  name: true,
  created_at: true,
  updated_at: true,
}

export async function createDialog(user_id: number, name: string) {
  // // id is auto-incremented
  const dialog = await prisma.dialog.create({
    data: {
      user_id,
      name,
    },
  })
  return dialog
}

export async function getDialogs() {
  const dialogs = await prisma.dialog.findMany({
    select: dialogSelect,
  })
  return dialogs
}

export async function getDialogsPage(page: number, limit: number) {
  const dialogs = await prisma.dialog.findMany({
    select: dialogSelect,
    skip: (page - 1) * limit,
    take: limit,
  })
  return dialogs
}

export async function getDialogById(id: number) {
  const dialog = await prisma.dialog.findUnique({
    select: dialogSelect,
    where: {
      id,
    },
  })
  return dialog
}

export async function getDialogsByUserId(user_id: number) {
  const dialogs = await prisma.dialog.findMany({
    select: dialogSelect,
    where: {
      user_id,
    },
  })
  return dialogs
}

export async function updateDialog(id: number, data: Dialog) {
  const dialog = await prisma.dialog.update({
    where: {
      id,
    },
    data,
  })
  return dialog
}

export async function deleteDialog(id: number) {
  const dialog = await prisma.dialog.update({
    where: {
      id,
    },
    data: {
      is_deleted: 1,
    },
  })
  return dialog
}
