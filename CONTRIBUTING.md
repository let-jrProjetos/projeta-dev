# Introduction

Welcome to ProjetaDev development! It is very important that we establish
some good practices and organization within the repository, so please pay attention to the
rest of this file as a guide to conduct.

# Good practices

There are some conventions and agreements to be followed when we are working in teams
in the programming environment that are called good practices, we can see more in detail about
this [article](https://www.devmedia.com.br/boas-praticas-de-programacao/21137).

# Development Flow - [Git Flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20the%20Gitflow,by%20Vincent%20Driessen%20no%20nvie)

1. Create a new branch, from **develop**, in your local repository.
2. Deploy your changes
3. Push your branch to the remote repository
4. Submit a Pull Request to **branch develop**.
5. Wait for another developer on the team to review it
6. If any changes are suggested, implement them.
7. Your teammates will integrate your code when it is ready.

## Version control

Make commits in the semantic model of [conventional commit](https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/#O_que_sao_Commits_Semanticos), here it is worth remembering that we are using a facilitator called emojis, you can see more of it in this article [Gitmoji](https://medium.com/brainny-smart-solutions/padronização-de-commits-com-gitmoji-ef0af535f3a4#:~:text=Gitmoji%20can%20just%20be%20used,terminal%20to%20install%20it%20globally.)

1. commit messages should be short and to the point. Examples:
   "🐛 at user controller"
   "✨ sign in feature"
2. Commits should have few changes, in general. That is: commits constantly.

## PR Considerations

When we do a Pull Request, or PR, a tamplate message will appear to
guide what needs to be right in your branch for it to be correctly merge, go "ticking" the completed checkboxes. Example:

- [ ] Check if your branch is up to date with develop
- [x] Check if you are logged into GitHub

## Language

Even though our platform's first language is Brazilian Portuguese this repository will have English as its language, so we can maintain uniformity and universalize our code even more.
