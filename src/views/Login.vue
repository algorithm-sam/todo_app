<template>
  <div>
    <div class="hero lg:p-10">
      <div
        class="container mx-auto flex items-center justify-between lg:py-10 "
      >
        <div class="hidden lg:block lg:w-2/5">
          <img src="../assets/hero.png" alt="Confused Dude" />
        </div>

        <div class="w-screen lg:w-3/5 text-center lg:text-right">
          <div
            class="bg-white lg:w-2/3 lg:mx-auto pt-4 pb-40 lg:px-6 px-2 text-left"
          >
            <form>
              <div class=" pb-10 pt-6">
                <h1
                  class="text-center font-medium text-gray-700 text-xl capitalize"
                >
                  Login
                </h1>
                <h2 class="text-center text-sm">Hey, Let's be sure its you</h2>
              </div>
              <div class="group-inline">
                <label for="email">Email</label>
                <input type="email" />
              </div>

              <div class="group-inline">
                <label for="password">Password</label>
                <input type="password" />
              </div>

              <p class="mt-3 text-sm text-right">
                New Here?
                <router-link
                  tag="a"
                  class="text-purple-500"
                  :to="{ name: 'register' }"
                  >Register Now</router-link
                >
              </p>

              <div class="mt-10 mb-5 text-center">
                <button
                  class="bg-white text-purple-500 rounded-full border border-purple-500 px-4 py-2"
                >
                  Login to Account
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  date() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  }
};
</script>

<style scoped>
.hero {
  @apply .bg-purple-500;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}
.group-inline {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 30px;
}
.group-inline label {
  flex-grow: 1;
  padding-right: 10px;
  max-width: 30%;
  width: 20%;
}

.group-inline input {
  /* flex-grow: 3; */
  border: 0;
  outline: none;
  border-bottom: 2px solid #a59fad;
  width: 70%;
  max-width: 80%;
}
.group-inline input:focus,
.form-group input:focus {
  outline: none;
}

.form-group input {
  width: 100%;
  border-bottom: 2px solid #d6bcfa;
}
</style>
