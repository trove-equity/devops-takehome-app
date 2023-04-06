variable "name" {
  type        = string
  description = "description"
}

variable "dns_zone" {
  default     = ""
  type        = string
}


variable "image" {
  default     = "us-docker.pkg.dev/cloudrun/container/hello"
  type        = string
}
