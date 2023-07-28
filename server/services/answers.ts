import type { Answer } from '@prisma/client'
import prisma from '../db'

const answerSelect = {
  id: true,
  field: true,
  keyword: true,
  answer: true,
  created_at: true,
  updated_at: true,
}

export async function createAnswer(data: Answer) {
  const answer = await prisma.answer.create({
    data,
  })
  return answer
}

export async function getAnswers() {
  const answers = await prisma.answer.findMany({
    select: answerSelect,
  })
  return answers
}

export async function getAnswersPage(page: number, limit: number) {
  const answers = await prisma.answer.findMany({
    select: answerSelect,
    skip: (page - 1) * limit,
    take: limit,
  })
  return answers
}

export async function getAnswerById(id: number) {
  const answer = await prisma.answer.findUnique({
    select: answerSelect,
    where: {
      id,
    },
  })
  return answer
}

export async function searchAnswerByKeyword(keyword: string) {
  const answers = await prisma.answer.findMany({
    select: answerSelect,
    where: {
      keyword: {
        contains: keyword,
      },
    },
  })
  return answers
}

export async function updateAnswer(id: number, data: Answer) {
  const answer = await prisma.answer.update({
    where: {
      id,
    },
    data,
  })
  return answer
}

export async function deleteAnswer(id: number) {
  const answer = await prisma.answer.update({
    where: {
      id,
    },
    data: {
      is_deleted: 1,
    },
  })
  return answer
}
