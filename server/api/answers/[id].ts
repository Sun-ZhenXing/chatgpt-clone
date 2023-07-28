import { getAnswerById } from '../../services/answers'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || ''
  const answer = await getAnswerById(Number.parseInt(id))
  if (!answer) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Answer not found!',
    })
    sendError(event, notFoundError)
  }
  return answer
})
