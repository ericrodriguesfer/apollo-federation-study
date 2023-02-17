CREATE TABLE IF NOT EXISTS public.student (
    id SERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.hobbies (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR NOT NULL,
    student_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now(),

    CONSTRAINT hobbies_user_fkey FOREIGN KEY (student_id) REFERENCES public.student(id)
);

CREATE TABLE IF NOT EXISTS public.school (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL,
    street VARCHAR NOT NULL,
    number VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    uf VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

ALTER TABLE public.student OWNER TO "postgres";
ALTER TABLE public.hobbies OWNER TO "postgres";
ALTER TABLE public.school OWNER TO "postgres";