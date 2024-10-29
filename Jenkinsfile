pipeline {
    agent {label 'agent2'}
    tools {
        jdk 'JAVA_HOME'
    }

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('DockerHub')
         DOCKER_IMAGE = 'front-g1-stationski'  
        IMAGE_TAG = 'latest'  
    }

    stages {
        stage('Checkout Frontend') {
            steps {
                script {
                    def gitStatus = sh(script: 'git ls-remote https://github.com/nassimfatnassi1999/font-station-SKI.git', returnStatus: true)
                    if (gitStatus != 0) {
                        error("Failed to access Git repository")
                    }
                }
                git branch: 'noursinehannachi_stationSKI_front', url: 'https://github.com/nassimfatnassi1999/font-station-SKI.git'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm install'
                sh 'ng build'
            }
        }
        
        stage('Docker Build Frontend') {
            steps {
                script {
                    // Build Docker image for frontend
                    sh 'docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} .'
                }
            }
        }

        stage('Push Frontend Docker Image to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        retry(3) { // Retry up to 3 times
                            // Login to Docker Hub
                            sh script: 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin', returnStdout: true
                            
                            // Tag the Docker image
                            sh 'docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} $DOCKER_USERNAME/${DOCKER_IMAGE}:${IMAGE_TAG}'
                            
                            // Push the Docker image
                            sh 'docker push $DOCKER_USERNAME/${DOCKER_IMAGE}:${IMAGE_TAG}'
                        }
                    }
                }
            }
        }
    }
     stage('Deploy to AKS') {
            steps {
                script {
                    echo "Deploying frontend application using deploy_front.yml."
                    sh 'kubectl apply -f deploy_front.yml'
                }
            }
        }
    

    post {
        success {
            script {
                // Send a success message to Slack with image name and tag
                slackSend(channel: '#jenkins_noursine', 
                          message: "Le build de pipeline Frontend a réussi : ${env.JOB_NAME} #${env.BUILD_NUMBER} ! Image pushed: ${DOCKER_IMAGE}:${IMAGE_TAG} successfully.")
            }
        }
        failure {
            script {
                // Send a failure message to Slack
                slackSend(channel: '#jenkins_noursine', 
                          message: "Le build de pipeline Frontend a échoué : ${env.JOB_NAME} #${env.BUILD_NUMBER}.")
            }
        }
    }
}
