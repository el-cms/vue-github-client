<template>
  <div class="repo-infos" v-if="repo">
    <!--<pre>{{repo}}</pre>-->

    <div><strong>id:</strong>{{repo.id}}</div>
    <div class="lg"><strong>name:</strong>{{repo.name}}</div>
    <div><strong>full_name:</strong>{{repo.full_name}}</div>
    <div><strong>private:</strong>{{repo.private}}</div>
    <div><strong>html_url:</strong>{{repo.html_url}}</div>
    <div class="lg"><strong>description:</strong>{{repo.description}}</div>
    <div><strong>fork:</strong>{{repo.fork}}</div>
    <div><strong>url:</strong>{{repo.url}}</div>
    <div><strong>forks_url:</strong>{{repo.forks_url}}</div>
    <div><strong>keys_url:</strong>{{repo.keys_url}}</div>
    <div><strong>collaborators_url:</strong>{{repo.collaborators_url}}</div>
    <div><strong>teams_url:</strong>{{repo.teams_url}}</div>
    <div><strong>hooks_url:</strong>{{repo.hooks_url}}</div>
    <div><strong>issue_events_url:</strong>{{repo.issue_events_url}}</div>
    <div><strong>events_url:</strong>{{repo.events_url}}</div>
    <div><strong>assignees_url:</strong>{{repo.assignees_url}}</div>
    <div><strong>branches_url:</strong>{{repo.branches_url}}</div>
    <div><strong>tags_url:</strong>{{repo.tags_url}}</div>
    <div><strong>blobs_url:</strong>{{repo.blobs_url}}</div>
    <div><strong>git_tags_url:</strong>{{repo.git_tags_url}}</div>
    <div><strong>git_refs_url:</strong>{{repo.git_refs_url}}</div>
    <div><strong>trees_url:</strong>{{repo.trees_url}}</div>
    <div><strong>statuses_url:</strong>{{repo.statuses_url}}</div>
    <div><strong>languages_url:</strong>{{repo.languages_url}}</div>
    <div><strong>stargazers_url:</strong>{{repo.stargazers_url}}</div>
    <div><strong>contributors_url:</strong>{{repo.contributors_url}}</div>
    <div><strong>subscribers_url:</strong>{{repo.subscribers_url}}</div>
    <div><strong>subscription_url:</strong>{{repo.subscription_url}}</div>
    <div><strong>commits_url:</strong>{{repo.commits_url}}</div>
    <div><strong>git_commits_url:</strong>{{repo.git_commits_url}}</div>
    <div><strong>comments_url:</strong>{{repo.comments_url}}</div>
    <div><strong>issue_comment_url:</strong>{{repo.issue_comment_url}}</div>
    <div><strong>contents_url:</strong>{{repo.contents_url}}</div>
    <div><strong>compare_url:</strong>{{repo.compare_url}}</div>
    <div><strong>merges_url:</strong>{{repo.merges_url}}</div>
    <div><strong>archive_url:</strong>{{repo.archive_url}}</div>
    <div><strong>downloads_url:</strong>{{repo.downloads_url}}</div>
    <div><strong>issues_url:</strong>{{repo.issues_url}}</div>
    <div><strong>pulls_url:</strong>{{repo.pulls_url}}</div>
    <div><strong>milestones_url:</strong>{{repo.milestones_url}}</div>
    <div><strong>notifications_url:</strong>{{repo.notifications_url}}</div>
    <div><strong>labels_url:</strong>{{repo.labels_url}}</div>
    <div><strong>releases_url:</strong>{{repo.releases_url}}</div>
    <div><strong>deployments_url:</strong>{{repo.deployments_url}}</div>
    <div><strong>created_at:</strong>{{repo.created_at}}</div>
    <div><strong>updated_at:</strong>{{repo.updated_at}}</div>
    <div><strong>pushed_at:</strong>{{repo.pushed_at}}</div>
    <div><strong>git_url:</strong>{{repo.git_url}}</div>
    <div><strong>ssh_url:</strong>{{repo.ssh_url}}</div>
    <div><strong>clone_url:</strong>{{repo.clone_url}}</div>
    <div><strong>svn_url:</strong>{{repo.svn_url}}</div>
    <div><strong>homepage:</strong>{{repo.homepage}}</div>
    <div><strong>size:</strong>{{repo.size}}</div>
    <div><strong>stargazers_count:</strong>{{repo.stargazers_count}}</div>
    <div><strong>watchers_count:</strong>{{repo.watchers_count}}</div>
    <div><strong>language:</strong>{{repo.language}}</div>
    <div><strong>has_issues:</strong>{{repo.has_issues}}</div>
    <div><strong>has_projects:</strong>{{repo.has_projects}}</div>
    <div><strong>has_downloads:</strong>{{repo.has_downloads}}</div>
    <div><strong>has_wiki:</strong>{{repo.has_wiki}}</div>
    <div><strong>has_pages:</strong>{{repo.has_pages}}</div>
    <div><strong>forks_count:</strong>{{repo.forks_count}}</div>
    <div><strong>mirror_url:</strong>{{repo.mirror_url}}</div>
    <div><strong>archived:</strong>{{repo.archived}}</div>
    <div><strong>open_issues_count:</strong>{{repo.open_issues_count}}</div>
    <div><strong>license:</strong>{{repo.license}}</div>
    <div><strong>forks:</strong>{{repo.forks}}</div>
    <div><strong>open_issues:</strong>{{repo.open_issues}}</div>
    <div><strong>watchers:</strong>{{repo.watchers}}</div>
    <div><strong>default_branch:</strong>{{repo.default_branch}}</div>
    <div><strong>permissions:</strong>{{repo.permissions}}</div>
    <div><strong>admin:</strong>{{repo.admin}}</div>
    <div><strong>push:</strong>{{repo.push}}</div>
    <div><strong>pull:</strong>{{repo.pull}}</div>

  </div>
</template>

<script>
  export default {
    name: 'element-repo',
    props: {
      repo: {required: false, type: Object}
    },
    methods: {
      loadRepo (repo) {
        this.loading = true
        this.$http.get(`https://api.github.com/users/${repo}`)
          .then(({body}) => {
            this.repos = body
            this.loading = false
          })
          .catch((e) => {
            this.error = e.body.message
            this.loading = false
          })
      }
    },
    data () {
      return {
        error: null,
        loading: false
      }
    },
    watch: {
      user (newRepo) {
        this.loadRepo(newRepo.full_name)
      }
    }
  }
</script>
