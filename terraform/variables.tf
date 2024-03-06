####### Variables Providers #######
variable "gcp_project" {
  type        = string
  default     = "khagu-devops" # Change me
  description = "The GCP project to deploy the app."
}
variable "gcp_zone" {
  type        = string
  default     = "europe-west2-b" # Change me if you need
  description = "The GCP zone to deploy the app."
}

variable "gcp_region" {
  type        = string
  default     = "europe-west2" # Change me if you need
  description = "The GCP region to deploy the app."
}


####### Variables Cluster #######
variable "cluster_name" {
  type        = string
  default     = "khagu-dev-cluster" # Change me if you need
  description = "The name of the GKE cluster."
}

variable "pool_name" {
  type        = string
  default     = "khagu-dev-pool" # Change me if you need
  description = "The name of the node pool."
  
}
####### Variables Service Account #######
variable "role_iam" {
  type = list(string)
  default = [ "roles/storage.objectViewer", "roles/container.hostServiceAgentUser", "roles/container.admin","roles/container.clusterAdmin" ]
  description = "The roles to assign to the service account."
}