# Install jenkins

run this command to run jenkins on docker
ß
```
docker run -p 8080:8080 -p 50000:50000 -v /local/path:/var/jenkins_home jenkins/jenkins
```

The you can enter in the specified port http://localhost:8080 and you will see this page.

![Jenkins login Error](./screenshots/jenkins-login-error.png)

Follow the instructions and do login. You can install the default plugins, as suggested.

You will be redirected to the Home page
![Jenkins Home](./screenshots/jenkins-home-page.png)

# Creating a job

In the Jenkins Home Page click in `Create a Job`

Select Freestyle Project to have custom configurations.

In this page, select `git` in `Source Code Management` section and add the name of the target repository and the branches that may be evaluated.

Save this configuration.

Then you can access the job page and check if the Jenkins is getting the repository successfully by clicking in the `Build Now` button.

![Jenkins Build](./screenshots/jenkins-build-page.png)

