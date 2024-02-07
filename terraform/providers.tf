terraform {
  backend "gcs" {
    bucket = "khagu-dev-terraform-state"
    prefix = "khagu-dev/state"
  }
}