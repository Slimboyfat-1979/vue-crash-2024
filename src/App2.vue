<script>
    export default {
        data() {
            return {
                name: 'John Doe',
                status: 'pending',
                tasks: ['Task 1', 'Task 2', 'Task 3'],
                link: 'https://google.com'
            }
        },
        methods: {
            toggleStatus() {
                if(this.status === 'active') {
                    this.status = 'pending'
                }else if(this.status === 'pending') {
                    this.status = 'inactive';
                }else{
                    this.status = 'active'
                }
            }
        }
    }
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" v-bind:key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click For Google</a> -->
  <a :href="link">Click For Google</a>
  <br>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>


<script setup>
import { ref, onMounted } from "vue";

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (this.status === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};


const addTask = () => {
    if(newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = ''
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}

onMounted(async () => {
    try {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await reponse.json();
        tasks.value = data.map(task => task.title)
    }catch(err) {
        console.log('Error fetching takses')
    }
})
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <form v-on:submit.prevent="addTask">
    <label for="">New Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>
  <h3>Tasks</h3>

  <ul>
    <li v-for="(task, index) in tasks" v-bind:key="task">
        <span>
            {{ task }}
        </span>
        <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <br />

  <button @click="toggleStatus">Change Status</button>
</template>
