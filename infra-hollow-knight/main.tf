# Proveedor AWS
provider "aws" {
  region = var.aws_region
}

# Load Balancer de tipo Application (ALB)
resource "aws_lb" "alb" {
  name               = "hollow-alb"
  load_balancer_type = "application"
  internal           = false

  # Debe usar al menos 2 subnets en distintas AZs
  subnets = [
    aws_subnet.public_subnet.id,
    aws_subnet.public_subnet_b.id
  ]

  security_groups = [aws_security_group.ecs_sg.id]

  tags = {
    Name = "hollow-alb"
  }
}

# Target Group para el servicio ECS (Fargate, target type IP)
resource "aws_lb_target_group" "tg" {
  name        = "hollow-tg"
  port        = 8080
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    path                = "/"
    protocol            = "HTTP"
    port                = "traffic-port"
    healthy_threshold   = 3
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
    matcher             = "200-399"
  }

  tags = {
    Name = "hollow-tg"
  }
}

# Listener HTTPS (443) usando el certificado de ACM (definido en acm.tf)
resource "aws_lb_listener" "https_listener" {
  load_balancer_arn = aws_lb.alb.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.ssl_cert.arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tg.arn
  }
}
