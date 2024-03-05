resource "google_container_cluster" "primary" {
  name               = var.cluster_name
  location           = var.gcp_zone

  remove_default_node_pool = true
  initial_node_count = 1
}

resource "google_container_node_pool" "primary_preemptible_nodes" {
  name       = var.pool_name
  location   = var.gcp_zone
  cluster    = google_container_cluster.primary.name
  node_count = 2

 node_config {
    preemptible  = true
    machine_type = "e2-standard-2"

    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    service_account = var.sa_email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}