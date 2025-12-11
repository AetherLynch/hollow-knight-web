CREATE TABLE IF NOT EXISTS characters (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO characters (name, role, description)
VALUES
  ('El Caballero', 'Protagonista', 'Un viajero silencioso que explora Hallownest.'),
  ('Hornet', 'Guardián', 'Rápida y letal, ligada al destino del reino.'),
  ('Hollow Knight', 'Vasija', 'Destinado a contener la infección.'),
  ('Grimm', 'Jefe', 'Líder del Troupe Grimm, elegante y mortal.'),
  ('Zote', 'Aventurero', 'Autoproclamado héroe... con mucha suerte.')
ON CONFLICT DO NOTHING;
