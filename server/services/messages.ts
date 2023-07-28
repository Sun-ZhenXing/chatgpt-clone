import type { Message } from '@prisma/client'
import prisma from '../db'
import { getAnswers } from './answers'

const messageSelect = {
  id: true,
  dialog_id: true,
  user_id: true,
  answer_id: true,
  question: true,
  answer: true,
  created_at: true,
  updated_at: true,
}

export async function createMessage(dialog_id: number, question: string) {
  // random choose answer
  const answers = await getAnswers()
  const selected_answer = answers[Math.floor(Math.random() * answers.length)]
  const message = await prisma.message.create({
    data: {
      dialog_id,
      user_id: 1,
      question,
      answer: selected_answer.answer,
    },
  })
  return message
}

export async function getMessages() {
  const messages = await prisma.message.findMany({
    select: messageSelect,
  })
  return messages
}

export async function getMessagesPage(page: number, limit: number) {
  const messages = await prisma.message.findMany({
    select: messageSelect,
    skip: (page - 1) * limit,
    take: limit,
  })
  return messages
}

export async function getMessageById(id: number) {
  const message = await prisma.message.findUnique({
    select: messageSelect,
    where: {
      id,
    },
  })
  return message
}

export async function getMessagesByDialogId(dialog_id: number) {
  const messages = await prisma.message.findMany({
    select: messageSelect,
    where: {
      dialog_id,
    },
  })
  return messages
}

export async function updateMessage(id: number, data: Message) {
  const message = await prisma.message.update({
    where: {
      id,
    },
    data,
  })
  return message
}

export async function deleteMessage(id: number) {
  const message = await prisma.message.update({
    where: {
      id,
    },
    data: {
      is_deleted: 1,
    },
  })
  return message
}
