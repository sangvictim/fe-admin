"use client"

import { Text } from '@mantine/core';
import { count } from './state';
const ProfilePage = () => {


  function Counter() {
    return (
      <button onClick={() => count.value++} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button Count {count}
      </button>
    );
  }

  const ValueCounter = () => (
    <>
      Count: {count}
    </>
  )


  return (
    <div>
      <Text>Profile Page</Text>
      <Counter />
      <br />
      <ValueCounter />
    </div>
  )
}

export default ProfilePage