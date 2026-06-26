# 🚀 GitHub CI Pipeline with SonarQube & Docker

This project demonstrates a **Continuous Integration (CI)** pipeline using **GitHub Actions**, **SonarQube**, and **Docker Hub**.

## 📌 Project Workflow

The CI pipeline follows the below process:

1. Developer pushes code to the GitHub repository.
2. **SonarQube Analysis** is triggered using `sonarqube.yml`.
3. The Quality Gate is verified.
4. If the Quality Gate passes, the Pull Request/Merge Request is merged.
5. The main CI workflow (`complete-ci.yml`) starts.
6. The application is built successfully.
7. Automated tests are executed.
8. If all tests pass:
   - Docker image is built.
   - Image is tagged.
   - Image is pushed to Docker Hub (`testing-lab` repository).
9. Testers can pull and use the latest Docker image for testing.

---

## 📂 GitHub Actions Workflows

### 1️⃣ sonarqube.yml

This workflow is responsible for:

- Checking out the source code
- Running SonarQube code analysis
- Verifying the SonarQube Quality Gate
- Preventing merge if Quality Gate fails

---

### 2️⃣ complete-ci.yml

This workflow performs the complete CI process:

- Checkout source code
- Build the application
- Run unit/integration tests
- Build Docker image
- Tag Docker image
- Push Docker image to Docker Hub

---

## 🛠️ Technologies Used

- GitHub Actions
- SonarQube
- Docker
- Docker Hub
- Git

---

## 📁 Project Structure

```
.github/
└── workflows/
    ├── sonarqube.yml
    └── complete-ci.yml

Dockerfile
README.md
app.js
app.test.js
package.json
```

---

## 🔄 CI Pipeline Flow

```
Developer Push
       │
       ▼
SonarQube Scan
       │
Quality Gate Pass
       │
       ▼
Merge Completed
       │
       ▼
Application Build
       │
       ▼
Run Tests
       │
Tests Passed
       │
       ▼
Build Docker Image
       │
       ▼
Push Image to Docker Hub
       │
       ▼
Tester Pulls Latest Image
```

---

## 🐳 Docker Hub

Repository Name:

```
testing-lab
```

Example:

```bash
docker pull <dockerhub-username>/testing-lab:latest
```

---

## ✅ Benefits

- Automated code quality checks
- Automated build process
- Automated testing
- Docker image creation
- Continuous Integration using GitHub Actions
- Easy deployment for testing

---

## 👨‍💻 Author

Created as a GitHub Actions Continuous Integration project demonstrating SonarQube integration and Docker image automation.
