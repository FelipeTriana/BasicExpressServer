pipeline{
 agent {
	label 'FTG'
	}
 stages{
       stage('Checkout-git'){
              steps {
               git poll: true, url: 'https://github.com/FelipeTriana/BasicExpressServer.git'    
              }
       }
       stage('InstallRequirements'){
              steps {
                     sh '''
                           bash -c "npm i"
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
                           bash -c "npm start & ls"
                     '''
              }
       }
 
 }
}
