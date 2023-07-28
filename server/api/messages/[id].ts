import { getMessageById } from '../../services/messages'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || ''
  const message = await getMessageById(Number.parseInt(id))
  if (!message) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Message not found!',
    })
    sendError(event, notFoundError)
  }
  return message
})
