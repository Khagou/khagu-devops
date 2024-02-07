# service_account / service_account.tf
resource "google_service_account" "cluster_service_account" {
  project      = var.gcp_project
  account_id   = "cluster-service-account"
  display_name = "Service Account linked for the cluster"
}

resource "google_project_iam_binding" "cluster_service_account" {
  project  = var.gcp_project
  for_each = toset(var.role_iam)
  role               = each.value
   members = [
    "serviceAccount:${google_service_account.cluster_service_account.email}"
  ]
}