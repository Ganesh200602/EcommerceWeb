pipeline {
    agent any

    tools {
        nodejs 'nodejs'   // configure in Jenkins → Global Tool Config
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Show Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}
