<template>
  <div class="container">
    <h1>ToDo App</h1>
    <div class="new-toDo">
      <div class="input">
        <label for="text">new toDo</label>
        <input type="text" name="text" id="text" />
      </div>
      <button class="add-new">Add ToDo</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  padding: 10px 16px;
  margin: auto;
  border: 2px solid #ff0000;
  gap: 20px;
  border-radius: 8px;
  .new-toDo {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;

    .input {
      flex-direction: column;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
