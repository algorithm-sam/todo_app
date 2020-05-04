<template>
  <div>
    <div class="hero">
      <div class="container mx-auto">
        <h1>This is some homepage content</h1>
      </div>
    </div>

    <div class="description py-16">
      <div class="container mx-auto">
        <h1>This is a description on the left with a small underline</h1>
        <div class="flex">
          <div class="w-2/3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error,
              nulla similique maiores quod nemo libero ab tempora aspernatur
              nihil earum autem rerum fugit nam minus cumque inventore in qui?
            </p>
          </div>

          <div class="w-1/3">
            <div>
              <p>Image Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta">
      <div class="container mx-auto">
        <h1>
          wavy background image
        </h1>

        <p>
          Take it for a ride. Just a click away.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  height: 600px;
  min-height: 600px;
  @apply .bg-purple-500;
}
</style>
