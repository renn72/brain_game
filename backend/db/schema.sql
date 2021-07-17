CREASTE_DATABASE brain_high_score;
\c brain_high_score;

CREATE TABLE high_scores (
  id SERIAL PRIMARY KEY,
  name TEXT,
  score INT
);