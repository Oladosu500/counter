import { reactive } from 'vue'

export default function useCounter(initialValue = 0) {
  const state = reactive({
    value: initialValue
  })

  function increment() {
    state.value++
  }

  function decrement() {
    state.value--
  }

  function reset() {
    state.value = initialValue
  }

  function setValue(newValue) {
    state.value = newValue
  }

  return {
    state,
    increment,
    decrement,
    reset,
    setValue
  }
}
