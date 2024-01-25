import { useState } from 'preact/hooks'

const randomMessage = (messages: string[]) =>
  messages[Math.floor(Math.random() * messages.length)]

export default function Greeting({ messages }: { messages: string[] }) {
  const [greeting, setGreeting] = useState(messages[0])

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage(messages))}>
        New Greeting
      </button>
    </div>
  )
}
