import arc from '@architect/functions'

async function fn (event) {
  // log the queue handle
  console.log(JSON.stringify(event, null, 2))
}

export let handler = arc.queues.subscribe(fn)
