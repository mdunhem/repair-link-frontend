node {

  docker.image('mdunhem/docker-angular-jenkins:1.1.1').inside {
          
    stage('Checkout') {
      checkout scm
    }
    
    stage('Install') {
      sh 'npm install'
    }
    
    stage('Test') {
      sh 'npm run lint'
      sh 'npm test'
    }

    stage('Build') {
      sh 'npm run build:prod'
    }
    
    stage('Deploy') {
      echo 'Deployment not set up yet.'
    }

    stage('Cleanup') {
      deleteDir()
    }

  }

}
