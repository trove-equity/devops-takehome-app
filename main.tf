resource "google_cloud_run_service" "default" {
  template {
    spec {
      containers {
        image = var.image
      }
    }
  }

  name     = var.name
  location = "us-central1"

  traffic {
    percent         = 100
    latest_revision = true
  }
}


resource "google_dns_managed_zone" "zone" {
  dns_name    = "${var.dns_zone}"
  description = "Default DNS zone"
  name        = "${var.dns_zone} Zone"
}

resource "google_dns_record_set" "frontend" {
  name = "service.${google_dns_managed_zone.zone.dns_name}"

  type = "CNAME"
  
  ttl  = 300
  
  managed_zone = google_dns_managed_zone.zone.name
  
  rrdatas = ["google_cloud_run_service.default"]
}

