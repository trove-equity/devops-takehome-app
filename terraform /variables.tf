variable "name" {
  type        = string
  description = "description"
}

variable "dns_zone" {
  default     = ""
  description = "description"
  type        = string
}


variable "image" {
  default     = "us-docker.pkg.dev/cloudrun/container/hello"
  description = "description"
  type        = string
}
