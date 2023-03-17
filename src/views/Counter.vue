<template >
  <div class="my_div" >
    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjgzNTUgMjEuMjA2NUgxMi40MjIyTDcuNjEwMzUgMzYuMjIyMUgxMC41MTA0TDExLjg0MjIgMzIuMDk3NkgxOC41MDE1TDE5Ljg5NzggMzYuMjIyMUgyMi43OTc4TDE3LjgzNTUgMjEuMjA2NVpNMTIuNjE1NSAyOS43MTMyTDE1LjEyODkgMjEuOTU4NEwxNy43MDY2IDI5LjcxMzJIMTIuNjE1NVpNMjYuNzY2NSAzNi4yNDM2VjIxLjIwNjVIMjQuMTAyOFYzNi4yNDM2SDI2Ljc2NjVaTTMyLjYzODQgMjUuMTU5MVYyMS4yMDY1SDI5Ljk3NDdWMjUuMTU5MUgyOC4zNjM2VjI3LjI0MjhIMjguNjIxNEMyOC42MjE0IDI3LjI0MjggMjkuOTc0NyAyNy4yNDI4IDI5Ljk3NDcgMjguNzI1MUMyOS45NzQ3IDI5LjM2OTUgMjkuOTc0NyAzMy41MTU0IDI5Ljk3NDcgMzMuNTE1NEMyOS45NzQ3IDM1LjA0MDYgMzEuMTk5MiAzNi4yNDM2IDMyLjcwMjkgMzYuMjQzNkgzNC41Mjg4VjMzLjg4MDZDMzQuNTI4OCAzMy44ODA2IDMzLjkwNTggMzMuODgwNiAzMy40NzYyIDMzLjg4MDZDMzMuMDI1MSAzMy44ODA2IDMyLjYzODQgMzMuNDkzOSAzMi42Mzg0IDMzLjA0MjhWMjguOTE4NEMzMi42Mzg0IDI3LjMyODggMjkuMjY1OCAyNy4yNDI4IDI4LjcwNzMgMjcuMjQyOEgzNC41Mjg4VjI1LjE1OTFIMzIuNjM4NFpNMTYuMDc0MSA0Ny45NDVDMTYuMDc0MSA0Ny45NDUgMTMuMTk1NSA0Ny4yNzkxIDEzLjEwOTYgNDcuMjU3NkMxMi4xNDI5IDQ2Ljk5OTkgMTEuMzI2NiA0Ni41MjczIDExLjMyNjYgNDUuNTM5MUMxMS4zMjY2IDQ0LjQ2NSAxMi42MzcgNDMuNTg0MyAxNC4yOTExIDQzLjU4NDNDMTYuMzEwMyA0My41ODQzIDE3LjQ0ODkgNDQuODMwMiAxNy40NDg5IDQ2LjA1NDdIMjAuMjYyOUMyMC4yNjI5IDQzLjQzMzkgMTguMjIyMiA0MS4yMjEzIDE0LjI5MTEgNDEuMjIxM0MxMC45NjE1IDQxLjIyMTMgOC41MTI1NyA0My4wMDQzIDguNTEyNTcgNDUuNTYwNkM4LjUxMjU3IDQ4LjIwMjggMTAuMTg4MSA0OS40NzAyIDEyLjYzNyA1MC4wMjg3QzEyLjYzNyA1MC4wMjg3IDE1LjUzNyA1MC42OTQ3IDE1LjYwMTUgNTAuNzE2MkMxNi43MTg1IDUwLjk5NTQgMTcuNjQyMiA1MS41NTM5IDE3LjY0MjIgNTIuNjQ5NUMxNy42NDIyIDU0LjAwMjggMTUuOTY2NiA1NC44NjIxIDE0LjIwNTIgNTQuNzExN0MxMS44MjA3IDU0LjUxODQgMTAuOTQgNTIuOTUwMiAxMC45NCA1MS44MzMySDguMTQ3MzlDOC4xNDczOSA1NC4yODIxIDEwLjE4ODEgNTYuOTg4NyAxNC4yNDgxIDU3LjA5NjFDMTcuMjk4NSA1Ny4xNjA2IDIwLjQ1NjMgNTUuNDg1IDIwLjQ1NjMgNTIuNjQ5NUMyMC40NTYzIDUwLjAyODcgMTguNjUxOCA0OC41NjggMTYuMDc0MSA0Ny45NDVaTTI3LjMwMTMgNTQuNTgyOEMyNS42MDQzIDU0LjU4MjggMjQuNzAyMSA1Mi45NzE3IDI0LjcwMjEgNTEuMTI0M0MyNC43MDIxIDQ5LjI1NTQgMjUuODE5MSA0Ny42NjU4IDI3LjI3OTggNDcuNjY1OEMyOC40Mzk4IDQ3LjY2NTggMjkuMzYzNSA0OC41MjUgMjkuNjg1OCA0OS43MDY1SDMyLjU2NDNDMzIuMDkxNyA0Ni45MzU0IDI5Ljg3OTEgNDUuMzAyOCAyNy4yNTgzIDQ1LjMwMjhDMjQuMzE1NCA0NS4zMDI4IDIxLjc1OTEgNDcuODgwNiAyMS45MDk1IDUxLjQ2OEMyMi4wMzg0IDU0LjgxOTEgMjQuNDQ0MyA1Ni45MjQzIDI3LjMyMjggNTYuOTI0M0MzMC4wMDggNTYuOTI0MyAzMi4wMDU4IDU1LjE0MTMgMzIuNTIxMyA1Mi43MTM5SDI5LjU1NjlDMjkuMzIwNiA1My42ODA2IDI4LjQ2MTMgNTQuNTgyOCAyNy4zMDEzIDU0LjU4MjhaTTM3LjA0NTcgNTAuMTU3NkMzNy4wNDU3IDUwLjE3OTEgMzcuMDQ1NyA1MC4yMDA2IDM3LjA0NTcgNTAuMjIyMUMzNy4wNDU3IDUwLjIwMDYgMzcuMDQ1NyA1MC4xNzkxIDM3LjA0NTcgNTAuMTU3NlpNNDAuMDk2MSA0NS4zNDU4QzM4LjQ2MzUgNDUuNDc0NyAzNy4wNjcyIDQ3LjE3MTcgMzcuMDQ1NyA1MC4xNTc2QzM3LjA2NzIgNDguNjc1NCAzNy43MzMxIDQ3LjYwMTMgMzkuMjU4MyA0Ny42MDEzQzQwLjkzMzggNDcuNjAxMyA0MS40NzA5IDQ4Ljg0NzMgNDEuNDcwOSA1MC4yMjIxVjU2LjY4OEg0NC4xNTZWNDkuMzE5OUM0NC4xNTYgNDYuNzQyMSA0Mi4wMjk0IDQ1LjE5NTQgNDAuMDk2MSA0NS4zNDU4Wk0zNC4zODIgNDEuNjUxVjU2LjY4OEgzNy4wNDU3VjQxLjY1MUgzNC4zODJaTTUxLjM4NiA0NS4zMDI4QzQ4LjUyOSA0NS4zMDI4IDQ1LjkwODMgNDcuNDI5NSA0NS45MDgzIDUxLjEyNDNDNDUuOTA4MyA1NC44MTkxIDQ4LjQ4NiA1Ni45MDI4IDUxLjM4NiA1Ni45MjQzQzU0LjMwNzUgNTYuOTAyOCA1Ni44ODUzIDU0Ljc5NzYgNTYuODg1MyA1MS4xMjQzQzU2Ljg4NTMgNDcuNDI5NSA1NC4yNDMxIDQ1LjMwMjggNTEuMzg2IDQ1LjMwMjhaTTUxLjM4NiA1NC41NjEzQzQ5Ljk2ODMgNTQuNTYxMyA0OC41OTM1IDUzLjQ0NDMgNDguNTkzNSA1MS4xMjQzQzQ4LjU5MzUgNDguOTMzMiA0OS45NDY4IDQ3LjY4NzMgNTEuMzg2IDQ3LjY2NThDNTIuODQ2OCA0Ny42ODczIDU0LjIwMDEgNDguOTU0NyA1NC4yMDAxIDUxLjEyNDNDNTQuMjAwMSA1My40NDQzIDUyLjgyNTMgNTQuNTYxMyA1MS4zODYgNTQuNTYxM1pNNjMuNzYzMSA0NS4zMDI4QzYwLjkwNiA0NS4zMDI4IDU4LjI4NTMgNDcuNDI5NSA1OC4yODUzIDUxLjEyNDNDNTguMjg1MyA1NC44MTkxIDYwLjg2MzEgNTYuOTAyOCA2My43NjMxIDU2LjkyNDNDNjYuNjg0NiA1Ni45MDI4IDY5LjI2MjMgNTQuNzk3NiA2OS4yNjIzIDUxLjEyNDNDNjkuMjYyMyA0Ny40Mjk1IDY2LjYyMDEgNDUuMzAyOCA2My43NjMxIDQ1LjMwMjhaTTYzLjc2MzEgNTQuNTYxM0M2Mi4zNDUzIDU0LjU2MTMgNjAuOTcwNSA1My40NDQzIDYwLjk3MDUgNTEuMTI0M0M2MC45NzA1IDQ4LjkzMzIgNjIuMzIzOCA0Ny42ODczIDYzLjc2MzEgNDcuNjY1OEM2NS4yMjM4IDQ3LjY4NzMgNjYuNTc3MiA0OC45NTQ3IDY2LjU3NzIgNTEuMTI0M0M2Ni41NzcyIDUzLjQ0NDMgNjUuMjAyMyA1NC41NjEzIDYzLjc2MzEgNTQuNTYxM1pNNzMuODIwMSA1Ni42ODhWNDEuNjUxSDcxLjE1NjRWNTYuNjg4SDczLjgyMDFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzMuODUxNyAzMi45NjI5SDM3LjQwNzJWMzYuMjIyMUg3My44NTE3VjMyLjk2MjlaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K" alt="altschool">
   <img alt="dollar" src="https://avatars.githubusercontent.com/u/74744008?v=4">
 </div>
  <div class="counter">
    <h1>Counter</h1>
    <div class="cnt">
      <p>{{ counter.state.value }}</p>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
    <button @click="counter.reset">Reset</button>
    <br />
    <input v-model.number="newValue" type="number" min="0">
    <br />
    <button @click="counter.setValue(newValue)">Set Value</button>
  </div>
</div>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
  name: 'CounterComposable',
  setup() {
    const counter = useCounter()
    const newValue = counter.state.value

    return {
      counter,
      newValue
    }
  }
}
</script>

<style>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  height: 100vh;
 background-color: rgb(206, 197, 197);

 
}

.counter h1 {
  font-size: 3rem;
  font-weight: bold;
  color: rgb(12, 19, 85);
}
.cnt button {
  margin: 3px;
  padding: 5px 12px;
  color: rgb(255, 255, 255);
  background-color:rgb(4, 6, 88);
  border-radius: 5px;
}
.cnt button :hover {
  background-color: rgb(15, 5, 99);
  color: rgb(129, 127, 255);
}
.cnt {
  background-color: rgb(255, 255, 255);
  
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(55, 55, 138) 5px 5px 5px;
}
.cnt p {
  font-size: 2rem;
  font-weight: bold;
  color: rgb(4, 6, 88)
}
.cnt input {
  margin: 3px;
  padding: 5px 12px;
  color: rgb(228, 28, 28);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;


}
.my_div img{
  width: 100px;
  height: 100px;
}
.my_div img:nth-child(2) {
  border-radius: 50%;
  float:right;

}
.my_div {
  background-color: rgb(255, 255, 255);
  padding: 10px 20px;
  margin: auto;
}
</style>
