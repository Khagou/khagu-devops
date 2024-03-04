terraform {
  backend "gcs" {
    bucket = "khagu-devops"
    prefix = "terraform/state"
  }
}