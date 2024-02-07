variable "gcp_region" {
  description = "The GCP zone to deploy the cluster."  
}

variable "pool_name" {
  description = "The name of the node pool."
}
variable "cluster_name" {
  description = "The name of the GKE cluster."
}

variable "sa_email" {
  description = "The email of the service account."
}