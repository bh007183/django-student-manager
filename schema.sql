use studentDB;

insert into class_app_class (id, class_grade, teacher, user_id) values (1, 2, "Grace Warthen", 1);

insert into class_app_student (id, first_name, last_name, classes_id) values (2, 'Dario', 'Melson', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (3, 'Moria', 'Bleasby', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (4, 'Ree', 'Kyle', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (5, 'Neel', 'Ownsworth', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (6, 'Waly', 'Nathan', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (7, 'Bary', 'McPaik', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (8, 'Angel', 'Quoit', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (9, 'Donica', 'McTrusty', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (10, 'Tricia', 'Imesen', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (11, 'Pamella', 'Fetherstonhaugh', 1);
insert into class_app_student (id, first_name, last_name, classes_id) values (12, 'Maryjane', 'Carson', 1);

insert into class_app_subject (id, title, student_id, classes_id) values (1, "Biology 101", 12, 1);
insert into class_app_subject (id, title, student_id, classes_id) values (2, "Algebra 97",  3, 1);
insert into class_app_subject (id, title, student_id, classes_id) values (3, "Economics",  9, 1);
insert into class_app_subject (id, title, student_id, classes_id) values (4, "Piano", 4, 1);
insert into class_app_subject (id, title, student_id, classes_id) values (5, "English",  4, 1);