import { getDialogById } from '../../../services/dialogs'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || ''
  const dialog = await getDialogById(Number.parseInt(id))
  if (!dialog) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Dialog not found!',
    })
    sendError(event, notFoundError)
  }
  return dialog
})
