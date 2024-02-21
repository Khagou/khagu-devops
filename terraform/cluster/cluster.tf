resource "google_container_cluster" "primary" {
  name               = var.cluster_name
  location           = var.gcp_zone

  remove_default_node_pool = true
  initial_node_count = 1

  node_pool_auto_config {
    network_tags {
      tags = ["foo", "bar"]
    }
  }
  cluster_autoscaling {
    enabled = true
    resource_limits {
      resource_type = "memory"
      minimum       = 1000
      maximum       = 10000
    }
  }

}

resource "google_container_node_pool" "primary_preemptible_nodes" {
  name       = var.pool_name
  location   = var.gcp_zone
  cluster    = google_container_cluster.primary.name

  node_config {
    preemptible  = true
    machine_type = "e2-micro"

    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    service_account = var.sa_email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
  autoscaling {
    min_node_count = 1
    max_node_count = 8
  }
}
resource "google_container_node_pool" "secondary_preemptible_nodes" {
  name       = var.pool_name_eck
  location   = var.gcp_zone
  cluster    = google_container_cluster.primary.name

  node_config {
    preemptible  = true
    machine_type = "e2-standard-2"

    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    service_account = var.sa_email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  
  }
  autoscaling {
    min_node_count = 1
    max_node_count = 8
  }
}