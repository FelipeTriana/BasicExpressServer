pipeline{
 agent any
 stages{
       stage('Checkout-git'){
              steps {
               git poll: true, url: 'https://github.com/FelipeTriana/BasicExpressServer.git'    
              }
       }
       stage('InstallRequirements'){
              steps {
                     sh '''
                           bash -c "ls"
                     '''
              }
       }
       stage('TestApp'){
              steps {
                     sh '''
                           bash -c "npm test"
                     '''  
              }
       }
       stage('RunApp'){
              steps {
                     sh '''
                           bash -c "node app &"
                     '''
              }
       }
 }
}
