<template>
  <div>
    <div class="hero p-10">
      <div
        class="container mx-auto flex items-center justify-between lg:py-20 "
      >
        <div class="hidden lg:block lg:w-2/5">
          <img src="../assets/hero.png" alt="Confused Dude" />
        </div>

        <div class="w-screen lg:w-3/5 text-center lg:text-left">
          <h1
            class="text-xl text-white lg:text-3xl font-semibold mb-6 capitalize"
          >
            Are You Laden with so much responsibility and faced with the dilemma
            of concentrating on any?
          </h1>
          <p class="lg:hidden block text-gray-100 font-normal text-lg">
            <b>Smart Todo</b> Helps you overcome that challange by ordering your
            tasks according to deadline and priority. Let's help you make
            working more fun.
          </p>

          <p class="hidden lg:block text-gray-100 font-normal text-lg">
            <b>Smart Todo</b> Helps you overcome that challange by ordering your
            tasks according to deadline and priority. <b>Smart Todo</b> helps
            you focus on the most important task at any given time either with
            other of priority or with other of closest deadline. Never be caught
            unaware anymore. Let us help you make working more fun.
          </p>
          <div class="mt-5">
            <button class="bg-white text-purple-500 rounded-full px-4 py-2">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="description py-10 ">
      <div class="container mx-auto lg:px-2 lg:p-0">
        <div
          class="flex flex-wrap h-full items-center lg:-mx-10 contents-center"
        >
          <div class="w-full lg:w-1/2 order-2 lg:order-1 lg:px-10 px-3">
            <h1 class="my-6 lg:mb-6 text-xl font-gray-800 font-semibold ">
              See How Others are using <b>Smart Todo</b>
            </h1>

            <p class="text-lg text-center lg:text-left">
              3mmanuel is using <b>Smart Todo</b> to keep up to date with tasks
              his office assigned him. More like a mobile trello.
            </p>
          </div>

          <div class="w-full lg:w-1/2 order-1 lg:order-2 lg:px-10 px-3">
            <div class="w-full h-full text-center">
              <img
                src="../assets/mobile.png"
                alt="Phone_Images"
                class=" mx-auto"
                style="height:350px; width:200px; align:center;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta text-center p-10 bg-white h-64">
      <div class="container mx-auto">
        <h3 class="text-2xl font-semibold text-gray-700 mb-3">
          Don't You think you want in ?
        </h3>
        <p class="text-xl">
          We're totally free and opensourced too. Yipee!!!
        </p>

        <div class="text-center mt-10">
          <router-link
            tag="button"
            :to="{ name: 'register' }"
            class="rounded-full px-6 py-3 bg-white text-purple-500 border border-purple-500"
          >
            Register for free
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  @apply .bg-purple-500;
}

.description {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz48c3ZnIHdpZHRoPSczMHB4JyBoZWlnaHQ9JzY0cHgnIHZpZXdCb3g9JzAgMCAzMCA2NCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz48IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT48dGl0bGU+ejwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PC9kZWZzPjxnIGlkPSd6JyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1vcGFjaXR5PScwLjA1JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxnIGlkPSdmYWxsaW5nLXRyaWFuZ2xlcycgZmlsbD0nIzAwMDAwMCc+PHBhdGggZD0nTTIuMzM2MTgzNDQsMS4zMTExNTAzNSBMMy4zODU4NTQyNiwwLjI1MTQxODY4MSBDMy41NDY4MDI3NiwwLjA5MDQ1MDY3MzYgMy43NjUyMzcxMiwtMS4zOTMxMzc5MmUtMTcgMy45OTMwMTkyLDAgQzQuMjIwODAxMjcsMS4zOTMxMzc5MmUtMTcgNC40MzkyMzU2MywwLjA5MDQ1MDY3MzYgNC42MDAxODQxNCwwLjI1MTQxODY4MSBMNS42NTQ0NTAyNiwxLjMwNjU3ODE2IEw2LjY4NTYzMDI2LDIuMzM4OTY2OTEgTDcuMzE1ODgxMzMsMi45NzA0MzQ3OCBMNy43NDk0MTYxMSwzLjM4Nzg2OTg0IEM4LjA4MzUyNzk2LDMuNzI0MzE0NSA4LjA4MzUyNzk2LDQuMjY5MDQzMiA3Ljc0OTQxNjExLDQuNjA1NDg3ODYgTDYuNzAwOTQ1ODQsNS42NTkwNDExNiBMNC42MTQyOTM2OSw3Ljc0ODQ3NTk2IEM0LjI3ODQ2MzAxLDguMDgzODQxMzUgMy43MzQ3MjgzOSw4LjA4Mzg0MTM1IDMuMzk4ODk3NzEsNy43NDg0NzU5NiBMMS4zMTI2OTYxMSw1LjY1OTk2OTY3IEwwLjI1MjA4NzQyMSw0LjYwNzQxNzMgQzAuMDkwNjkxMjYwMSw0LjQ0NjMyNzUzIC0yLjc5MjAxNjA5ZS0xNyw0LjIyNzcwMTQ3IDAsMy45OTk3MTk0OCBDMi43OTIwMTYwOWUtMTcsMy43NzE3Mzc0OCAwLjA5MDY5MTI2MDEsMy41NTMxMTE0MiAwLjI1MjA4NzQyMSwzLjM5MjAyMTY1IEwxLjMxMDA1MzQ4LDIuMzM2ODMwMjUgTDIuMzM2MTgzNDQsMS4zMTExNTAzNSBaIE0yNC4zMzYxODM0LDMzLjMxMTE1MDQgTDI1LjM4NTg1NDMsMzIuMjUxNDE4NyBDMjUuNTQ2ODAyOCwzMi4wOTA0NTA3IDI1Ljc2NTIzNzEsMzIgMjUuOTkzMDE5MiwzMiBDMjYuMjIwODAxMywzMiAyNi40MzkyMzU2LDMyLjA5MDQ1MDcgMjYuNjAwMTg0MSwzMi4yNTE0MTg3IEwyNy42NTQ0NTAzLDMzLjMwNjU3ODIgTDI4LjY4NTYzMDMsMzQuMzM4OTY2OSBMMjkuMzE1ODgxMywzNC45NzA0MzQ4IEwyOS43NDk0MTYxLDM1LjM4Nzg2OTggQzMwLjA4MzUyOCwzNS43MjQzMTQ1IDMwLjA4MzUyOCwzNi4yNjkwNDMyIDI5Ljc0OTQxNjEsMzYuNjA1NDg3OSBMMjguNzAwOTQ1OCwzNy42NTkwNDEyIEwyNi42MTQyOTM3LDM5Ljc0ODQ3NiBDMjYuMjc4NDYzLDQwLjA4Mzg0MTMgMjUuNzM0NzI4NCw0MC4wODM4NDEzIDI1LjM5ODg5NzcsMzkuNzQ4NDc2IEwyMy4zMTI2OTYxLDM3LjY1OTk2OTcgTDIyLjI1MjA4NzQsMzYuNjA3NDE3MyBDMjIuMDkwNjkxMywzNi40NDYzMjc1IDIyLDM2LjIyNzcwMTUgMjIsMzUuOTk5NzE5NSBDMjIsMzUuNzcxNzM3NSAyMi4wOTA2OTEzLDM1LjU1MzExMTQgMjIuMjUyMDg3NCwzNS4zOTIwMjE3IEwyMy4zMTAwNTM1LDM0LjMzNjgzMDMgTDI0LjMzNjE4MzQsMzMuMzExMTUwNCBaJyBpZD0nQ29tYmluZWQtU2hhcGUnPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==)
    white;
}
</style>
