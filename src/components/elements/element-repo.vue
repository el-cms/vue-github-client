<template>
  <div>
    <h2 v-if="repo">{{repo.full_name}}</h2>
    <div v-if="loading">Chargement...</div>
    <div class="repo-infos" v-else-if="repoData && repo">

      <!--<pre>{{repo}}</pre>-->
      <div>
        <!-- Infos -->
        <i class="fa fa-code-fork text-warning" v-show="repo.fork"></i>
        <i class="fa fa-user-secret text-warning" v-show="repo.private"></i>
        &vert;
        <!-- Links -->
        <a :href="repo.homepage" v-show="repo.homepage"><i class="fa fa-globe"></i></a>
        <a :href="repo.html_url" v-show="repo.html_url"><i class="fa fa-github"></i></a>
        &vert;
        <!-- Stats -->
        <i class="fa fa-eye"></i> {{repo.watchers_count}}
        <!--<i class="fa fa-code-fork"></i> {{repo.forks}}-->
        <i class="fa fa-star"></i> {{repo.stargazers_count}}
        <i class="fa fa-code-fork"></i> {{repo.forks_count}}
        <span v-show="repo.has_issues"><i class="fa fa-bug"></i> {{repo.open_issues}}</span>
        &vert;
        <!-- Name + branch -->
        <strong>{{repo.name}}</strong>
        <em><code>({{repo.default_branch}})</code></em>
      </div>
      <blockquote>{{repo.description}}</blockquote>
      <div class="row">
        <div class="col-sm-6">
          <div v-show="repo.has_project">Projet :<strong> Oui</strong></div>
          <div>
            <strong>License</strong>
            <span v-if="!repo.license">Pas de license</span>
            <span v-else><a :href="repo.license.url" target="_blank">{{repo.license.name}}</a></span>
          </div>
          <div><strong>Date de création :</strong> {{repo.created_at | moment('calendar')}}</div>
          <div><strong>Date de mise à jour:</strong> {{repo.updated_at | moment('calendar')}}</div>
          <div><strong>Poussé le :</strong> {{repo.pushed_at | moment('calendar')}}</div>
          <div><strong>Langage :</strong> {{repo.language}}</div>
        </div>
        <div class="col-sm-6">
          <div><strong>Git:</strong>{{repo.git_url}}</div>
          <div><strong>SSH:</strong>{{repo.ssh_url}}</div>
          <div><strong>Clone:</strong>{{repo.clone_url}}</div>
          <div><strong>SVN:</strong>{{repo.svn_url}}</div>
        </div>
      </div>

      <hr>
      <!--<div><strong>size:</strong>{{repo.size}}</div>-->
      <!--<div><strong>has_downloads:</strong>{{repo.has_downloads}}</div>-->
      <!--<div><strong>has_wiki:</strong>{{repo.has_wiki}}</div>-->
      <!--<div><strong>has_pages:</strong>{{repo.has_pages}}</div>-->
      <!--<div><strong>forks_count:</strong>{{repo.forks_count}}</div>-->
      <!--<div><strong>mirror_url:</strong>{{repo.mirror_url}}</div>-->
      <!--<div><strong>archived:</strong>{{repo.archived}}</div>-->
      <!--<div><strong>permissions:</strong>{{repo.permissions}}</div>-->
      <!--<div><strong>admin:</strong>{{repo.admin}}</div>-->
      <!--<div><strong>push:</strong>{{repo.push}}</div>-->
      <!--<div><strong>pull:</strong>{{repo.pull}}</div>-->
      <!--<div><strong>url:</strong>{{repo.url}}</div>-->
      <!--<div><strong>forks_url:</strong>{{repo.forks_url}}</div>-->
      <!--<div><strong>keys_url:</strong>{{repo.keys_url}}</div>-->
      <!--<div><strong>collaborators_url:</strong>{{repo.collaborators_url}}</div>-->
      <!--<div><strong>teams_url:</strong>{{repo.teams_url}}</div>-->
      <!--<div><strong>hooks_url:</strong>{{repo.hooks_url}}</div>-->
      <!--<div><strong>issue_events_url:</strong>{{repo.issue_events_url}}</div>-->
      <!--<div><strong>events_url:</strong>{{repo.events_url}}</div>-->
      <!--<div><strong>assignees_url:</strong>{{repo.assignees_url}}</div>-->
      <!--<div><strong>branches_url:</strong>{{repo.branches_url}}</div>-->
      <!--<div><strong>tags_url:</strong>{{repo.tags_url}}</div>-->
      <!--<div><strong>blobs_url:</strong>{{repo.blobs_url}}</div>-->
      <!--<div><strong>git_tags_url:</strong>{{repo.git_tags_url}}</div>-->
      <!--<div><strong>git_refs_url:</strong>{{repo.git_refs_url}}</div>-->
      <!--<div><strong>trees_url:</strong>{{repo.trees_url}}</div>-->
      <!--<div><strong>statuses_url:</strong>{{repo.statuses_url}}</div>-->
      <!--<div><strong>languages_url:</strong>{{repo.languages_url}}</div>-->
      <!--<div><strong>stargazers_url:</strong>{{repo.stargazers_url}}</div>-->
      <!--<div><strong>contributors_url:</strong>{{repo.contributors_url}}</div>-->
      <!--<div><strong>subscribers_url:</strong>{{repo.subscribers_url}}</div>-->
      <!--<div><strong>subscription_url:</strong>{{repo.subscription_url}}</div>-->
      <!--<div><strong>commits_url:</strong>{{repo.commits_url}}</div>-->
      <!--<div><strong>git_commits_url:</strong>{{repo.git_commits_url}}</div>-->
      <!--<div><strong>comments_url:</strong>{{repo.comments_url}}</div>-->
      <!--<div><strong>issue_comment_url:</strong>{{repo.issue_comment_url}}</div>-->
      <!--<div><strong>contents_url:</strong>{{repo.contents_url}}</div>-->
      <!--<div><strong>compare_url:</strong>{{repo.compare_url}}</div>-->
      <!--<div><strong>merges_url:</strong>{{repo.merges_url}}</div>-->
      <!--<div><strong>archive_url:</strong>{{repo.archive_url}}</div>-->
      <!--<div><strong>downloads_url:</strong>{{repo.downloads_url}}</div>-->
      <!--<div><strong>issues_url:</strong>{{repo.issues_url}}</div>-->
      <!--<div><strong>pulls_url:</strong>{{repo.pulls_url}}</div>-->
      <!--<div><strong>milestones_url:</strong>{{repo.milestones_url}}</div>-->
      <!--<div><strong>notifications_url:</strong>{{repo.notifications_url}}</div>-->
      <!--<div><strong>labels_url:</strong>{{repo.labels_url}}</div>-->
      <!--<div><strong>releases_url:</strong>{{repo.releases_url}}</div>-->
      <!--<div><strong>deployments_url:</strong>{{repo.deployments_url}}</div>-->
      <vue-markdown>{{readme.body.content | unbase}}</vue-markdown>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'element-repo',
    components: {VueMarkdown},
    props: {
      repo: {required: false, type: Object}
    },
    data () {
      return {
        error: null,
        loading: false,
        repoData: {},
        readme: null
      }
    },
    methods: {
      loadRepo (owner, name) {
        console.log('plip')
        this.loading = true
        this.$http.get(`https://api.github.com/repos/${owner}/${name}`)
          .then(({body}) => {
            this.repoData = body
            console.log('plop')
            this.$http.get(`https://api.github.com/repos/${owner}/${name}/contents/README.md`, {type: 'text'})
              .then((md) => {
                console.log(md)
                this.readme = md
                this.loading = false
              })
              .catch((error) => {
                console.log('error', error)
                this.error = error.body.message
                this.loading = false
              })
          })
          .catch((e) => {
            console.log('Erreur', e)
            this.error = e.body.message
            this.loading = false
          })
      }
    },
    watch: {
      repo (newRepo) {
        this.loadRepo(newRepo.owner.login, newRepo.name)
      }
    },
    filters: {
      unbase (text) {
        return atob(text)
      }
    }
  }
</script>
