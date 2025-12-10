resource "aws_route53_record" "app_dns" {
  zone_id = "Z123456789" # ID de tu Hosted Zone
  name    = "app.hollowlynch.com"
  type    = "A"

  alias {
    name                   = aws_lb.alb.dns_name
    zone_id                = aws_lb.alb.zone_id
    evaluate_target_health = true
  }
}
