import { createMessage } from '../../../services/messages'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || ''
  const { question } = await readBody(event)
  const message = await createMessage(Number.parseInt(id), question)
  if (!message) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Message not found!',
    })
    sendError(event, notFoundError)
  }
  return message
})
