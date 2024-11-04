pipeline {
    agent { label 'master' }

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_token')
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
                git branch: 'aladin_stationSKI_front', url: 'https://github.com/nassimfatnassi1999/font-station-SKI.git'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm install'
                sh 'ng build --configuration production' // Utiliser la configuration de production pour le build
            }
        }

        stage('Docker Build Frontend') {
            steps {
                script {
                    // Build Docker image for frontend
                    sh "docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Push Frontend Docker Image to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker_token', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        retry(3) { // Retry up to 3 times
                            // Login to Docker Hub
                            sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                            
                            // Tag the Docker image
                            sh "docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} $DOCKER_USERNAME/${DOCKER_IMAGE}:${IMAGE_TAG}"
                            
                            // Push the Docker image
                            sh "docker push $DOCKER_USERNAME/${DOCKER_IMAGE}:${IMAGE_TAG}"
                        }
                    }
                }
            }
        }

        stage('Deploy to AKS') {
            agent { label 'agent1' }
            steps {
                script {
                    echo "Deploying frontend application using deploy.yml."
                    sh 'kubectl apply -f deployment.yml'
                }
            }
        }
    }

    post {
        success {
            script {
                slackSend(channel: '#jenkins-messg', 
                          message: "Build réussi : ${env.JOB_NAME} #${env.BUILD_NUMBER}! Image pushed: ${DOCKER_IMAGE}:${IMAGE_TAG} successfully.")
            }
        }
        failure {
            script {
                slackSend(channel: '#jenkins-messg', 
                          message: "Build échoué : ${env.JOB_NAME} #${env.BUILD_NUMBER}.")
            }
        }
    }
}
