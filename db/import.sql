CREATE SEQUENCE IF NOT EXISTS app_user_seq START WITH 1 INCREMENT BY 50;

CREATE SEQUENCE IF NOT EXISTS product_seq START WITH 1 INCREMENT BY 50;

CREATE TABLE app_user
(
    id        BIGINT       NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    password  VARCHAR(255) NOT NULL,
    role      VARCHAR(255) NOT NULL,
    CONSTRAINT pk_app_user PRIMARY KEY (id)
);

CREATE TABLE product
(
    id             BIGINT         NOT NULL,
    vat            DECIMAL        NOT NULL,
    net_price      DECIMAL(19, 2) NOT NULL,
    article_number VARCHAR(255)   NOT NULL,
    name           VARCHAR(255)   NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (id)
);

ALTER TABLE app_user
    ADD CONSTRAINT uc_app_user_user_name UNIQUE (user_name);

ALTER TABLE product
    ADD CONSTRAINT uc_product_article_number UNIQUE (article_number);
--
-- TOC entry 2974 (class 0 OID 18575)
-- Dependencies: 202
-- Data for Name: product
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (1, '123', 'Table', 27.00, 70.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (2, '124', 'Car', 27.00, 1000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (3, '125', 'Chair', 20.00, 100.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (4, '172', 'Helicopter', 10.00, 200000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (5, '7821', 'Bed', 30.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (6, '12791', 'Phone', 40.00, 1000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (7, '7894', 'Coat', 30.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (8, '800', 'Cat', 30.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (9, '83921', 'Dog', 0.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (10, '94217', 'Laptop', 70.00, 8000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (11, '84215', 'Table1', 27.00, 74.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (12, '12131', 'Car1', 27.00, 12000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (13, '1532125', 'Chair1', 23.00, 100.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (14, '17243245', 'Helicopter1', 13.00, 200000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (15, '78214634', 'Bed1', 20.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (16, '127915437', 'Phone1', 44.00, 1000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (17, '78954364', 'Coat1', 33.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (18, '80065473', 'Cat1', 35.00, 708.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (19, '839216436', 'Dog1', 0.00, 783.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (20, '942154357', 'Laptop1', 70.00, 80400.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (21, '12354325', 'Table2', 27.00, 704.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (22, '1523553224', 'Car2', 27.00, 10400.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (23, '1253255', 'Chair2', 20.00, 14200.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (24, '17244214', 'Helicopter2', 102.00, 200000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (25, '782142412', 'Bed2', 30.00, 304.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (26, '127942141', 'Phone2', 40.00, 1000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (27, '7894242142', 'Coat2', 330.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (28, '80033213', 'Cat2', 30.00, 782.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (29, '8392132132', 'Dog2', 20.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (30, '9421742142', 'Laptop2', 703.00, 8000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (31, '123321321', 'Table3', 237.00, 70.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (32, '12432132', 'Car3', 27.00, 3211000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (33, '1252312213', 'Chair3', 20.00, 1003.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (34, '172421421', 'Helicopter3', 10.00, 3200000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (35, '7821321321', 'Bed3', 30.00, 330.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (36, '121442791', 'Phone3', 40.00, 132000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (37, '784214294', 'Coat3', 340.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (38, '800241', 'Cat3', 30.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (39, '8392421421', 'Dog3', 0.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (40, '94217321321', 'Laptop4', 70.00, 8000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (41, '122321323', 'Table4', 27.00, 70.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (42, '12442142', 'Car4', 27.00, 1000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (43, '125421421', 'Chair4', 20.00, 100.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (44, '172643643', 'Helicopter4', 10.00, 200000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (45, '7821643643', 'Bed4', 30.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (46, '12791532532', 'Phone4', 40.00, 1000.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (47, '7894421421', 'Coat4', 30.00, 30.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (48, '800754754', 'Cat4', 30.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (49, '8392164643', 'Dog4', 0.00, 78.00);
INSERT INTO public.product (id, article_number, name, vat, net_price) VALUES (50, '94217643643', 'Laptop5', 70.00, 8000.00);



