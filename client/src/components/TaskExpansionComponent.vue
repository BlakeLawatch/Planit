<template>
    <div>
        {{ task.name }}
    </div>
</template>


<script>
import { Task } from '../models/Task';


export default {
    props: { task: { type: Task, required: true } },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>