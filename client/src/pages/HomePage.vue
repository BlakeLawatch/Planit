<template>
  <div class="container-fluid">
    <section class="row d-flex justify-content-center">
      <div class="col-10 card p-5 ">
        <section class="row d-flex">
          <div class="col-6">
            <p class="main-color m-0 fw-bold">Projects</p>
            <p>a list of all the projects for {{ account.name }}</p>
          </div>
          <div class="col-6 text-center">
            <button type="button" class="btn button-color py-2 my-4 text-light" data-bs-toggle="modal"
              data-bs-target="#createProject">
              Create Project
            </button>
          </div>

        </section>
        <section class="row my-3">
          <div class="col-12 col-md-4 secondary-color">Name
          </div>
          <div class="col-12 col-md-4 secondary-color">Members
          </div>
          <div class="col-12 col-md-4 secondary-color">Started
          </div>
        </section>
        <section>
          <div class="d-flex my-2" v-for="project in projects" :key="project.id">
            <ProjectsComponent :project="project" />
          </div>
        </section>
        <div>
        </div>
      </div>
    </section>
  </div>
  <CreateProjectModal />
</template>



<script>
import CreateProjectModal from '../components/CreateProjectModal.vue';
import Pop from '../utils/Pop';
import { projectsService } from '../services/ProjectService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import ProjectsComponent from '../components/ProjectsComponent.vue';

export default {
  setup() {
    onMounted(() => {
      getProjects()
    })

    async function getProjects() {
      try {
        await projectsService.getProjects()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      account: computed(() => AppState.account),
      projects: computed(() => AppState.projects)
    };
  },
  components: { CreateProjectModal, ProjectsComponent }
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: 2px 0px 10px gray;
  background-color: white;
}

.button-color {
  background-color: #a729c4;
}
</style>
