provider "google" {
  project     = var.gcp_project
  region      = var.gcp_region
  zone        = var.gcp_zone
}

module "service_account" {
  source  = "./service_account"
  gcp_project = var.gcp_project
  role_iam = var.role_iam
}

module "cluster" {
  source  = "./cluster"
  cluster_name = var.cluster_name
  gcp_zone = var.gcp_zone
  sa_email = module.service_account.sa_email
  pool_name = var.pool_name
}