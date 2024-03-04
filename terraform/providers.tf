terraform {
  backend "gcs" {
    bucket = "khagu-dev-terraform-state"
    prefix = "terraform/state"
  }
}