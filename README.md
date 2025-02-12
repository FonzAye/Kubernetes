# Kubernetes MongoDB with Monitoring Stack

## Overview
This project deploys a monitoring stack in a Kubernetes cluster with the following components:
- **MongoDB**: Managed using StatefulSets for persistent storage.
- **Mongo Exporter**: Exposes MongoDB metrics for Prometheus.
- **Metrics**: Includes cAdvisor, Grafana, MongoDB Exporter, and Prometheus for monitoring and visualization.

### Architecture
- **MongoDB** is deployed using StatefulSets for high availability and persistent storage.
- **MongoDB Exporter** collects and exposes MongoDB metrics for Prometheus.
- **Prometheus** collects metrics from MongoDB Exporter and cAdvisor.
- **Grafana** visualizes metrics from Prometheus.

## Prerequisites
- Kubernetes cluster (e.g., Minikube, EKS, GKE)
- Helm 3.x installed
- kubectl configured for the Kubernetes cluster

## Setup Instructions

## Setup Instructions 
1. Clone the repository:
```sh
git clone https://github.com/FonzAye/Kubernetes.git
cd Kubernetes/mongo-express-K8s-chart/
```
2. Install HELM chart and observe upon creation:
```sh
helm install chart .
watch -x kubectl get all
```
3. Enjoy :)
