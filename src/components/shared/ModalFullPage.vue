<script setup></script>

<template>
  <section class="modal-container">
    <div class="modal">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.modal-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgb(219 219 219 / 70%);
  pointer-events: all;
  z-index: 100;
}

.modal {
  padding: clamp(6px, 3%, 30px) clamp(10px, 8%, 90px);
  width: clamp(320px, 60%, 600px);
  max-height: 90%;
  overflow-y: scroll;
  display: block;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 5px 3px lightgray;
  padding: 20px;
  background-color: white;
}
</style>
