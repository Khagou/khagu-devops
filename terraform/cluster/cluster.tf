resource "google_container_cluster" "primary" {
  name               = var.cluster_name  # Name of the cluster
  location           = var.gcp_region   # Region where the cluster will be created

  remove_default_node_pool = true # Remove the default node pool
  initial_node_count = 1 # Number of nodes in the cluster initially

  logging_service    = "logging.googleapis.com/kubernetes" # Enable Stackdriver Logging
  monitoring_service = "monitoring.googleapis.com/kubernetes" # Enable Stackdriver Monitoring

  node_pool_auto_config { 
    network_tags {
      tags = ["foo", "bar"] 
    }
  }
  node_config {
    disk_type = "pd-standard" # Disk type for the nodes
    disk_size_gb = 50 # Disk size for the nodes
  }
  cluster_autoscaling {
    enabled = true # Enable cluster autoscaling
    resource_limits {
      resource_type = "cpu" # Resource type for autoscaling
      minimum       = 1 # Minimum number of nodes
      maximum       = 8 # Maximum number of nodes
    }

    resource_limits {
      resource_type = "memory" # Resource type for autoscaling
      minimum       = 6 # Minimum memory in GB
      maximum       = 64 # Maximum memory in GB
    }
  }

}

resource "google_container_node_pool" "primary_preemptible_nodes" {
  name       = var.pool_name
  location   = var.gcp_region
  cluster    = google_container_cluster.primary.name

  node_config {
    preemptible  = true
    machine_type = "e2-standard-4"

    # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
    service_account = var.sa_email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
    disk_type = "pd-standard"
    disk_size_gb = 50
  }
  autoscaling {
    min_node_count = 1
    max_node_count = 8
  }
}
