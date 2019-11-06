<template>
  <div>
    <h1 class="text-center">Create Task</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="offset-md-1">
        <div class="form-group">
          <label for="username">Title</label>
          <input
            v-model="task.title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="password">Body</label>
          <textarea class="form-control" placeholder="Body" v-model="task.body" name="body" id="body" cols="30" rows="10"></textarea>
        </div>
        <div class="form-group">
          <label for="due-date">Due Date</label>
          <input
            v-model="task.dueDate"
            type="date"
            class="form-control"
            id="due-date"
            placeholder="Due Date"
            name="due-date"
          />
        </div>
      </div>
      <div class="form-group text-center">
        <button type="submit" class="btn btn-success">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as taskService from "../../services/TaskService.js";

export default {
  name: "task-create",
  data: function() {
    return {
      task: {
        title: "",
        body: "",
        dueDate: ""
      }
    };
  },
  methods: {
    onSubmit: async function() {
      const request = {
        task: this.task
      };
      await taskService.createTask(request);
      this.$router.push({ name: "tasks-all" });
    }
  }
};
</script>