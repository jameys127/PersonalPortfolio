
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    email       VARCHAR(100) NOT NULL UNIQUE,
    password    TEXT         NOT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
    is_admin    BOOLEAN      NOT NULL DEFAULT false
);

CREATE TABLE projects (
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    description  TEXT,
    slug         VARCHAR(255),
    github       TEXT,
    link         TEXT,
    short        TEXT
);

CREATE TABLE project_images (
    id          SERIAL PRIMARY KEY,
    project_id  INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    img_url     TEXT NOT NULL
);
