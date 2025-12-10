# Security Group para ECS (servicio de la aplicacion)
resource "aws_security_group" "ecs_sg" {
  name        = "ecs-hollow-sg"
  description = "Permite trafico HTTP a la app Hollow Knight"
  vpc_id      = aws_vpc.main.id

  # Permitir trafico HTTP al contenedor en el puerto 8080
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Salida libre a internet
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "ecs-hollow-sg"
  }
}

# Security Group para la base de datos RDS
resource "aws_security_group" "rds_sg" {
  name        = "rds-hollow-sg"
  description = "Permite acceso a la base de datos solo desde ECS"
  vpc_id      = aws_vpc.main.id

  # Permitir acceso al puerto MySQL solo desde el SG de ECS
  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs_sg.id]
  }

  # Salida libre
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "rds-hollow-sg"
  }
}
