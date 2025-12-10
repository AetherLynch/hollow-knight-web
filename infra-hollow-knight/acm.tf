resource "aws_acm_certificate" "ssl_cert" {
  domain_name       = "app.hollowlynch.com"
  validation_method = "DNS"
}
