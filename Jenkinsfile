pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Test') {
            agent {
                docker {
                    label 'docker'
                    image 'node:lts-alpine'
                    args '--name docker-node'
                }
            }
            steps {
                sh 'node --version'
                sh 'yarn'
                sh 'yarn test --no-color 2>test_result.txt'
                archiveArtifacts artifacts: 'test_result.txt'
            }
        }
    }
}