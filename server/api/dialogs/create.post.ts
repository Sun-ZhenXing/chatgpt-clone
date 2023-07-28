import { createDialog } from '../../services/dialogs'

// import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  // const session = await getServerSession(event)
  // if (!session || !session.user) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: 'Unauthorized!',
  //   })
  // }
  // const { user } = session
  // console.log('user:', user)
  return createDialog(1, '')
})
