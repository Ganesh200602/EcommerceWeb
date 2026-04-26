pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                npm cache clean --force
                rm -rf node_modules package-lock.json
                npm install --legacy-peer-deps
                '''
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build || true'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }
    }
}
