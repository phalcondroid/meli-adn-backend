-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: meli_dna
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `meli_stats`
--

DROP TABLE IF EXISTS `meli_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meli_stats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dna` text,
  `mutant` tinyint(1) DEFAULT NULL,
  `hash` text,
  `status` tinyint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meli_stats`
--

LOCK TABLES `meli_stats` WRITE;
/*!40000 ALTER TABLE `meli_stats` DISABLE KEYS */;
INSERT INTO `meli_stats` VALUES (12,'ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG',1,'853233798d8faabcb74a85822eee596c',1,'2021-10-15 20:05:56','2021-10-15 20:05:56'),(13,'ATGCGA,CAGTGC,TTATGT,AGAAGG,CCTCTA,TCACTG',1,'e77fed571011542635221eb639282504',1,'2021-10-15 20:28:07','2021-10-15 20:28:07'),(14,'FTGCGA,CAGTGC,TTATGT,AGAAGG,CCTCTA,TCACTG',0,'aa2cca6fca86bcf9741ff0c966659240',1,'2021-10-15 20:35:47','2021-10-15 20:35:47'),(15,'TTGCGA,CTGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG',1,'563247b93689163e41ab1aa8fec02453',1,'2021-10-15 20:41:52','2021-10-15 20:41:52'),(16,'TTGCGA,CTGTGC,TTATGT,AGAAAG,CCCCTA,TCACTG',0,'4cdea15ade4b83dd19e0d27aefc09068',1,'2021-10-15 20:42:14','2021-10-15 20:42:14');
/*!40000 ALTER TABLE `meli_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meli_users`
--

DROP TABLE IF EXISTS `meli_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meli_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meli_users`
--

LOCK TABLES `meli_users` WRITE;
/*!40000 ALTER TABLE `meli_users` DISABLE KEYS */;
INSERT INTO `meli_users` VALUES (2,'meli','$2a$10$HjYpbD.v6XI3u6/5MBVoveg2IZ73JJx8Bj/kUwWpil2IUmvh2Fp8S',1,'2021-10-14 07:15:59','2021-10-14 07:15:59');
/*!40000 ALTER TABLE `meli_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-15 16:30:34