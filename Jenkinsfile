pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''npm ci
npm run test'''
      }
    }

  }
  environment {
    HOME = ''
    CHROME_BIN = '/bin/google-chrome'
  }
}