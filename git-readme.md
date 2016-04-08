Download a zip of the seed. This allows you to manually setup origin/upstream
git remote add origin ....your private repo....
git remote add upstream https://github.com/NathanWalker/angular2-seed-advanced.git
Create a new framework for your application in src/frameworks to build your codebase out. Say your app is called AwesomeApp, then create awesomeapp.framework and start building out all your components and services in there. Create other frameworks as you see fit to organize.
If you don't want an integration that comes out of box with this seed; for example. let's say you don't want to use i18n. Then just delete the i18n.framework, remove ng2-translate as dependency root package.json and nativescript/package.json. Then remove the references to i18n throughout.
Remove src/components since those are just samples and create a new folder for your components, let's say src/pages. It's not absolutely necessary to remove and create a new differently named folder for your components but it might make merging in upstream changes a bit smoother.
You can read more about configuring a remote for a fork here

Merging latest upstream changes

git fetch upstream
git merge upstream/master you could rebase, but it wouldn't be worth it as the conflict resolution can often be more painful if there are conflicts
Handle any conflicts to get latest upstream into your application. If you removed src/components as mentioned above, they may show back up when merging in latest upstream. You can just remove the folder again.
Continue building your app.