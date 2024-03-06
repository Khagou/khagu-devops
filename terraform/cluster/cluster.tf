resource "google_container_cluster" "primary" {
  name               = var.cluster_name
  location           = var.gcp_region

  remove_default_node_pool = true
  initial_node_count = 1

  node_pool_auto_config {
    network_tags {
      tags = ["foo", "bar"]
    }
  }
  node_config {
    disk_type = "pd-standard"
    disk_size_gb = 100
  }
  cluster_autoscaling {
    enabled = true
    resource_limits {
      resource_type = "cpu"
      minimum       = 1
      maximum       = 8
    }

    resource_limits {
      resource_type = "memory"
      minimum       = 100
      maximum       = 1000
    }
  }

}

resource "google_container_node_pool" "primary_preemptible_nodes" {
  name       = var.pool_name
  location   = var.gcp_region
  cluster    = google_container_cluster.primary.name

  node_config {
    preemptible  = true
    machine_type = "e2-standard-2"

    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    service_account = var.sa_email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
    disk_type = "pd-standard"
    disk_size_gb = 100
  }
  autoscaling {
    min_node_count = 1
    max_node_count = 8
  }
}
