-- ----------------------------
-- Sequence structure for vnd_product_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."vnd_product_seq";
CREATE SEQUENCE "public"."vnd_product_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for vnd_product
-- ----------------------------
DROP TABLE IF EXISTS "public"."vnd_product";
CREATE TABLE "public"."vnd_product" (
  "id" int8 NOT NULL DEFAULT nextval('vnd_product_seq'::regclass),
  "created_date" timestamp(6),
  "updated_date" timestamp(6),
  "prdnm" varchar(255) COLLATE "pg_catalog"."default",
  "SKU" varchar(255) COLLATE "pg_catalog"."default",
  "prdImg01" varchar(255) COLLATE "pg_catalog"."default",
  "htmlDetail" text COLLATE "pg_catalog"."default",
  "Selprc" int8 DEFAULT nextval('vnd_product_seq'::regclass),
  "is_active" varchar(1) COLLATE "pg_catalog"."default",
  "prdNo" varchar(255) COLLATE "pg_catalog"."default"
);

-- ----------------------------
-- Records of vnd_product
-- ----------------------------
INSERT INTO "public"."vnd_product" VALUES (21, '2019-08-31 18:14:29.175', NULL, 'Case Spigen Neo Hybrid Iphone 6 Plus - Red', 'SPGN01', 'http://image.elevenia.co.id/g/9/8/2/8/6/7/25982867_B_V3.jpg', '<p>SPG Neo Hybrid</p>
<p>Terbuat dari bahan berkualitas</p>
<p>tahan benturan dengan design modern</p>
<p>terdapat pilihan banyak warna</p>
<p>untuk Iphone 6 Plus dan Iphone 6s Plus</p>', 200000, 'Y', '25982867');
INSERT INTO "public"."vnd_product" VALUES (25, '2019-08-31 18:18:26.261', NULL, 'Pakaian Anjing Dan Kucing HOOPET warna SILVER', 'HPET03', 'http://image.elevenia.co.id/g/0/2/2/7/9/6/28022796_B_V1.jpg', '<p>BAJU BRAND HOOPET UNTUK ANJING DAN KUCING</p><p><br>GAYA YG BERBEDA<br>BAHAN YG LEMBUT<br>* Hangat Di Musim dingi</p><p>PERHATIAN!<br>Pada saat memesan harap buat catatan UKURAN / SIZE yg di pesan,<br>Apabila tidak mencatumkan UKURAN/SIZE Maka kami kirim ukuran secara acak dengan<br>stok yg tersedia</p><p>SIZE Leher(cm/inch) Dada(cm/inch) Panjang(cm/inch)</p><p>BESAR =M 28/11inc 33-38/13inc-15.8inc 28/11inc</p><p>MEDIUM = S 25/9.8inc 28-33/11inc-13.8inc 23/9inc</p><p>KECIL =XS 22/8.7inc 23-28/9inc-11.8inc 18/7.1inc</p>', 150000, 'Y', '28022796');
INSERT INTO "public"."vnd_product" VALUES (22, '2019-08-31 18:14:40.241', NULL, 'TORU Motomo Aluminium Case for iPhone 6 Plus - Dark Blueedit', 'TORU01 edit', 'http://image.elevenia.co.id/g/0/2/2/8/4/1/28022841_B.jpeg', '<p>TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p><p>Features<br>High Quality Material<br>TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan.</p><p>Lightweight Design<br>Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p><p>Compatibility<br>TORU Motomo Aluminium Case cocok dan pas untuk iPhone 6+ Anda.</p>', 200000, 'Y', '28022841');
INSERT INTO "public"."vnd_product" VALUES (34, '2019-09-01 20:18:10.592', NULL, 'TORUaaaaa Motomo Aluminium Case for iPhone 6s Plusss test', 'MT01aaaaa', 'http://image.elevenia.co.id/g/9/9/4/4/3/2/25994432_B_V17.jpeg', '<p>&nbsp;&nbsp;</p>
<p>Case TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p>
<p>&nbsp;&nbsp;</p>
<p>High Quality Material</p>
<p>TORU Motomo Aluminium Case terbuat dari &nbsp;&nbsp;bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra &nbsp;&nbsp;untuk iPhone 6+ Anda dari goresan dan benturan.</p>
<p>&nbsp;</p>
<p>Lightweight Design</p>
<p>Dengan design yang ramping dan ringan, Anda &nbsp;&nbsp;tetap mendapat akses ke setiap tombol dengan mudah.</p>
<p>&nbsp;</p>
<p>Compatibility</p>
<p>TORU Motomo Aluminium Case cocok dan pas &nbsp;&nbsp;untuk iPhone 6 plus atau 6s plus Anda.</p>', 149000, 'Y', '25994432');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."vnd_product_seq"', 42, true);

-- ----------------------------
-- Primary Key structure for table vnd_product
-- ----------------------------
ALTER TABLE "public"."vnd_product" ADD CONSTRAINT "vnd_product_pkey" PRIMARY KEY ("id");

