# Build the Docker image
build-docker:
    pnpm i
    pnpm build
    docker build -t mastermind .

# Run the Docker container on port 8000
run-docker:
    docker rm -f mastermind
    docker run -d -p 8000:8000 --name mastermind mastermind

# Push the Docker image to ECR
push-ecr:
    aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 330298988091.dkr.ecr.us-east-2.amazonaws.com
    docker tag mastermind:latest 330298988091.dkr.ecr.us-east-2.amazonaws.com/zackporter.com/mastermind:latest
    docker push 330298988091.dkr.ecr.us-east-2.amazonaws.com/zackporter.com/mastermind:latest
