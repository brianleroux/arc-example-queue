import arc from '@architect/functions'

export async function handler (req) {

  // publish a payload to the queue
  await arc.queues.publish({
    name: 'bg',
    payload: { ping: Date.now() }
  })

  // redirect back to the root
  return {
    statusCode: 303,
    headers: {
      'location': '/'
    }
  }
}
